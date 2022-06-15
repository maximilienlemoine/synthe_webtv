
var minute='', seconde=1, tempo=0, temps='', scoret1=0, scoret2=0, timer='', i = 1;
$(document).ready(function(){
            
            var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        };
        var macc = io.connect("http://localhost:1337", connectionOptions);

//Affichage
            $('#Ccom').change(function(){
                    
                if (this.checked){
                    $('#arcom').show();
                } else{
                    $('#arcom').hide();
                };
            });
            $('#Ctimer').change(function(){
                    
                if (this.checked){
                    $('#artimer').show();
                } else{
                    $('#artimer').hide();
                };
            });
            $('#Ctitre').change(function(){
                    
                if (this.checked){
                    $('#artitre').show();
                } else{
                    $('#artitre').hide();
                };
            });
            $('#Clogo').change(function(){
                    
                if (this.checked){
                    $('#arlogo').show();
                } else{
                    $('#arlogo').hide();
                };
            });
            $('#Cscores').change(function(){
                    
                if (this.checked){
                    $('#arquizz').show();
                } else{
                    $('#arquizz').hide();
                };
            });
            $('#Cimg').change(function(){
                    
                if (this.checked){
                    $('#arimg').show();
                } else{
                    $('#arimg').hide();
                };
            });
            $('#Cchron').change(function(){
                    
                if (this.checked){
                    $('#archronique').show();
                } else{
                    $('#archronique').hide();
                };
            });


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
// Titre Chronique

            $('#chronlance').click(function(){
                if ($("#chronique").val()!=''){
                    macc.emit("backtoserveur", { 'action':'titrechronlance', 'info':$("#chronique").val()})
                    $('#chronlance').hide()
                    $('#chronrentre').show()
                }
            })
            $('#chronrentre').click(function(){
                macc.emit("backtoserveur", { 'action':'titrechronrentre', 'info':''})
                $('#chronrentre').hide()
                $('#chronlance').show()
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
                            minute= $("#tini").val()
                            
                            macc.emit("backtoserveur",{'action':'tshow', 't':''})
                            timer = setInterval(function(){
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
                                        $('.temps').html(temps)
                                        macc.emit("backtoserveur", {'action':3, 't':temps})
                                    } 
                                }
                        },1000)
                        }
                        $('#tempsplay').hide()
                        $('#tempspause').show() 
                    }
                }
            }   
            })
            $('#tempsclear').click(function(){
                    clearInterval(timer)
                    tempo=0
                    minute=0
                    seconde=1
                    temps=''
                    $('.temps').html('00:00')
                    macc.emit("backtoserveur",{'action':'thide', 't':''})
                    $('#tempspause').hide()
                    $('#tempsplay').show() 
                    $('#tempsshow').hide()
                    $('#tempshide').show()
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
        $('#quizzclearscores').click(function(){
            scoret1 = 0
            scoret2 = 0
            macc.emit('backtoserveur', { 'action':'scoret1', 'info':scoret1})
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
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
            $('.score2').html(scoret2)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t2m1').click(function(){
            scoret2= scoret2-1
            $('.score2').html(scoret2)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t20').click(function(){
            scoret2= 0
            $('.score2').html(scoret2)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t2p1').click(function(){
            scoret2= scoret2+1
            $('.score2').html(scoret2) 
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })
        $('#t2p2').click(function(){
            scoret2= scoret2+2
            $('.score2').html(scoret2)
            macc.emit('backtoserveur', { 'action':'scoret2', 'info':scoret2})
        })

// Upload Images

$('#uploadimage').on('submit', function (e) {
    e.preventDefault();

    var $form = $(this);
    var formdata = (window.FormData) ? new FormData($form[0]) : null;
    var data = (formdata !== null) ? formdata : $form.serialize();

    $.ajax({
        url: "loader.php",
        type: "POST",
        contentType: false, // obligatoire pour de l'upload
        processData: false, // obligatoire pour de l'upload
        //dataType: 'json', selon le retour attendu
        data: data,
        success: function (response) {
            i++;
            $('#imagerangement').append("<img class='vignette ui-widget-content' id='photo" + i + "' src='../images/" + response + "' width='100px' /> ");
            var laphoto = response;
            $("#photo" + i).click(function () {
                console.log("envois image " + laphoto);
                macc.emit("clientversserveur", { type: "master", action: "10", image: laphoto, cle_appli: 32411 });
                //if() si diapo active tous les deverouiller
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(".vignette").removeClass("nonactive");
                }
                else {
                    $(".vignette").removeClass("active");
                    $(".vignette").addClass("nonactive");
                    $(this).removeClass("nonactive").addClass("active");
                }
            });
            $("#photo" + i).draggable({ grid: [5, 5] });
        }
    });
});

// Listing images
$.ajax({
    url: "listing.php",
    dataType: "xml",
    success: function (recupxml) {
        console.log("recuperation ok");

        $(recupxml).find('image').each(function () {
            var laphoto = $(this).find('photo').text();
            i++;
            z = i * 5;
            $('#imagerangement').append("<img class='vignette ui-widget-content' id='image" + i + "' src='../images/" + laphoto + "' width='100px' /> ");

            $("#image" + i).click(function () {
                console.log("envois image " + laphoto);
                macc.emit("mastertoserveur", { type: "master", action: "10", image: laphoto, cle_appli: 32411 });
                //if() si diapo active tous les deverouiller
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(".vignette").removeClass("nonactive");
                }
                else {
                    $(".vignette").removeClass("active");
                    $(".vignette").addClass("nonactive");
                    $(this).removeClass("nonactive").addClass("active");
                }
            });
        });
        console.log("lancement draggable");
        $(".vignette").draggable({ grid: [5, 5] });
        $("#poub").droppable({
            drop: function (event, ui) {
                var id = ui.draggable.attr("id");
                $(".vignette").removeClass("nonactive");
                $("#" + id).hide();
                var photosrc = $("#" + id).attr('src');
                $.ajax("supprime.php?f=" + photosrc);
                //alert(photosrc); 

            }
        });
    }
});
}) //Close document