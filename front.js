$(document).ready(function(){
    
    var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

var macc = io.connect("http://localhost:1337", connectionOptions);
var temps=''
        console.log('go')
        macc.on('serveurtofront',function(recup){
            console.log(recup)
            if (recup.action==1) $('#commentaire').html(recup.info).effect('slide', { direction: "right" }, 500); 
            if (recup.action==0) $('#commentaire').toggle('slide', { direction: "right" },500);
            if (recup.action==3) {
                $('#taffiche').html(recup.t);
               
            }
            if (recup.action=='tshow') $('#taffiche').show()
            if (recup.action=='thide') $('#taffiche').hide()
            if (recup.action=='lshow') $('#logo').show()+ console.log('test')
            if (recup.action=='lhide') $('#logo').hide()+ console.log('hide')
})
})
