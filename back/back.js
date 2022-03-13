
var minute='', seconde=1, tempo=0, temps=''
$(document).ready(function(){
            
            var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        };
        var macc = io.connect("http://localhost:1337", connectionOptions);
           
//  Envoie basique
            $('#comlance').click(function(){
                if ($("#info").val()!=''){
                    macc.emit("backtoserveur", { 'action':1, 'info':$("#info").val()})
                    $('#comlance').hide()
                    $('#comrentre').show()
                }
            })
            $('#comrentre').click(function(){
                macc.emit("backtoserveur", { 'action':0, 'info':''})
                $('#comrentre').hide()
                $('#comlance').show()
            })

// Timer 
            $('#tempsplay').click(function(){
                if (tempo!=3){
                    if ($("#tini").val()==""){
                        alert('Vous n\'avez pas rentré de valeur')
                    } else {
                        if (tempo!=1){
                        tempo=1
                        if (temps==''){
                            lance($("#tini").val())
                        }
                        $('#tempsplay').hide()
                        $('#tempspause').show() 
                    }
                }
            }   
            })
            $('#tempspause').click(function(){
                if (tempo!=3){
                tempo=0
                $('#tempspause').hide()
                $('#tempsplay').show()
                } else{
                    $('#tempspause').hide()
                    $('#tempsplay').show()
                }
            })
            $('#tempshide').click(function(){
                if (tempo!=3){
                    if ($("#tini").val()!=""){
                        tempo=2
                        // $('.temps').hide()
                        macc.emit("backtoserveur",{'action':'thide', 't':''})
                        $('#tempshide').hide()
                        $('#tempsshow').show()
                    }
                } 
                
            })
            $('#tempsshow').click(function(){
                if (tempo!=3){
                    tempo=1
                    // $('.temps').show()
                    macc.emit("backtoserveur",{'action':'tshow', 't':''})
                    $('#tempsshow').hide()
                    $('#tempshide').show()
                }
                
            })


            function lance(minute){
                $('.temps').show()
                macc.emit("backtoserveur",{'action':'tshow', 't':''})
                setInterval(function(){
                    if (tempo==1){
                        seconde--
                        if (seconde<10){
                            seconde= "0" + seconde
                        }
                        temps=minute +':'+ seconde
                        $('.temps').html(temps)
                        macc.emit("backtoserveur", {'action':3, 't':temps})
                        if (seconde==0){
                            seconde=59
                            minute--
                            if (minute<10){
                                minute= "0" + minute
                            }
                            if (minute<=0 + seconde==0){
                                // $('.temps').hide()
                                tempo=3
                                macc.emit("backtoserveur",{'action':'thide', 't':''})
                            }
                            temps=minute +':'+ seconde
                            $('#temps').html(temps)
                            macc.emit("backtoserveur", {'action':3, 't':temps})
                        } 
                    }
            },100)
            }

        
//Timer
          
//Logo        
         $('#lhide').click(function(){
            macc.emit("backtoserveur", { 'action':'lhide', 'info':''})
            $('#lhide').hide()
            $('#lshow').show()
        })   
        $('#lshow').click(function(){
            macc.emit("backtoserveur", { 'action':'lshow', 'info':''})
            $('#lshow').hide()
            $('#lhide').show()
        })
        

    }) //Close document