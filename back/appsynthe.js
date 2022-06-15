console.log("Synthé 1.0");

var action =0;
var io = require("socket.io")(1337);


io.sockets.on('connection', function(client){
		console.log("interface connecté");
		//client.emit("affichage", info );
		client.on('backtoserveur', function(info){ 
										console.log("back emit "+info);
										io.sockets.emit("serveurtofront", info );
										});
			} );





