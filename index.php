<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="assets/jquery-ui.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="stylefront.css">
    <script type="text/javascript" src="socket.io.js"></script>
    <title>Front Synthe</title>
</head>
<body>
    <div id="commentaire">
        
    </div>
    <div id='taffiche'>
        
    </div>
    <div id='titre'>

    </div>
    <img src="images/logos2.png" alt="Logo de Au Canap" id='logo'>
    <div id='score'>
        <p id='nomt1'>Equipe 1</p>
        <p id='scoret1'>0</p>
        <p id='tiret'> - </p>
        <p id='scoret2'>0</p>
        <p id='nomt2'>Equipe 2</p>
        
    </div>
</body>
<script type="text/javascript" src="front.js?a=<?php echo rand(0,1000000)  ?>"></script>

</html>