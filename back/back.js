
var minute='', seconde=1, tempo=0, temps='', scoret1=0, scoret2=2
$(document).ready(function(){
            
            var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        };
        var macc = io.connect("http://localhost:1337", connectionOptions);
           
//  Envoie basique ( Commentaire)
            $('#comlance').click(function(){
                if ($("#com").val()!=''){
                    macc.emit("backtoserveur", { 'action':1, 'info':$("#com").val()})
                    $('#comlance').hide()
                    $('#comrentre').show()
                }
            })
            $('#comrentre').click(function(){
                macc.emit("backtoserveur", { 'action':0, 'info':''})
                $('#comrentre').hide()
                $('#comlance').show()
            })
// Titre

            $('#titrelance').click(function(){
                if ($("#titre").val()!=''){
                    macc.emit("backtoserveur", { 'action':'titrelance', 'info':$("#titre").val()})
                    $('#titrelance').hide()
                    $('#titrerentre').show()
                }
            })
            $('#titrerentre').click(function(){
                macc.emit("backtoserveur", { 'action':'titrerentre', 'info':''})
                $('#titrerentre').hide()
                $('#titrelance').show()
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
            },1000)
            }
          
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

// Quizz
        $('#quizzshow').click(function(){
            $('#quizzshow').hide()
            $('#quizzhide').show()
            macc.emit('backtoserveur', { 'action':'showscore', 'info':''})
        })
        $('#quizzhide').click(function(){
            $('#quizzhide').hide()
            $('#quizzshow').show()
            macc.emit('backtoserveur', { 'action':'hidescore', 'info':''})
        })
// Equipe 1
        $('#confnom1').click(function(){
            $('#team1').html($("#nomteam1").val())
            macc.emit('backtoserveur', { 'action':'nameteam1', 'info':$('#nomteam1').val()})
        })
        $('#t1m2').click(function(){
            scoret1= scoret1-2
            $('.score1').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret1', 'info':scoret1})
       

        })
        $('#t1m1').click(function(){
            scoret1= scoret1-1
            $('.score1').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret1', 'info':scoret1})
       

        })
        $('#t10').click(function(){
            scoret1= 0
            $('.score1').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret1', 'info':scoret1})
       

        })
        $('#t1p1').click(function(){
            scoret1= scoret1+1
            $('.score1').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret1', 'info':scoret1})
       

        })
        $('#t1p2').click(function(){
            scoret1= scoret1+2
            $('.score1').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret1', 'info':scoret1})
       

        })
// Equipe 2
        $('#confnom2').click(function(){
            $('#team2').html($("#nomteam2").val())
            macc.emit('backtoserveur', { 'action':'nameteam2', 'info':$('#nomteam2').val()})
        })
        $('#t2m2').click(function(){
            scoret2= scoret2-2
            $('.score2').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t2m1').click(function(){
            scoret2= scoret2-1
            $('.score2').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t20').click(function(){
            scoret2= 0
            $('.score2').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t2p1').click(function(){
            scoret2= scoret2+1
            $('.score2').html(scoret1) 
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t2p2').click(function(){
            scoret2= scoret2+2
            $('.score2').html(scoret1)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
// Equipe 2
    }) //Close document