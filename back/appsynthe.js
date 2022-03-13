console.log("Synthé 1.0");

var action =0;
var io = require("socket.io")(1337);


io.sockets.on('connection', function(client){
		console.log("un client connecté");
		//client.emit("affichage", info );
		client.on('backtoserveur', function(info){ 
										console.log("le master parle... "+info);
										io.sockets.emit("serveurtofront", info );
										});
			} );





