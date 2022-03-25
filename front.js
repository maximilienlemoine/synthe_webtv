$(document).ready(function(){
    $('#score').hide()
    var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

var macc = io.connect("http://localhost:1337", connectionOptions);
        macc.on('serveurtofront',function(recup){
            
            if (recup.action==1) $('#commentaire').html(recup.info).effect('slide', { direction: "right" }, 500); 
            if (recup.action==0) $('#commentaire').toggle('slide', { direction: "right" },500);
            if (recup.action==3) {
                $('#taffiche').html(recup.t);
               
            }
            if (recup.action=='tshow') $('#taffiche').show()
            if (recup.action=='thide') $('#taffiche').hide()
            if (recup.action=='lshow') $('#logo').show(300)
            if (recup.action=='lhide') $('#logo').hide(300)
            if (recup.action=='titrelance') $('#titre').html(recup.info).effect('slide', { direction: "down" }, 1000); 
            if (recup.action=='titrerentre') $('#titre').toggle('slide', { direction: "down" },1000);
            if (recup.action=='titrechronlance') $('#titrechron').html(recup.info).effect('slide', { direction: "left" }, 500); 
            if (recup.action=='titrechronrentre') $('#titrechron').toggle('slide', { direction: "left" },500);
            if (recup.action=='showscore') $('#score').show().effect('slide', { direction: "left" }, 500); 
            if (recup.action=='hidescore') $('#score').toggle('slide', { direction: "left" },500);
            if (recup.action=='nameteam1') $('#nomt1').html(recup.info)
            if (recup.action=='nameteam2') $('#nomt2').html(recup.info)
            if (recup.action=='scoret1') $('#scoret1').html(recup.info).effect('bounce',200);
            if (recup.action=='scoret2') $('#scoret2').html(recup.info).effect('bounce',200);
}) /* Requete node */
}) /* Document ready */
