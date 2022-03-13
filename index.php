<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="assets/jquery-ui.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet">
    <script type="text/javascript" src="socket.io.js"></script>
    <title>Document</title>
    <style>
        body{
            width:100%;
            height: 100%;
            position: relative;
            font-family: 'Poppins', sans-serif;
        }
        #synthe{
            background-color: blue;
            display: none;
        }
        #taffiche{
            color: black;
            background-color: red;
        }
        #logo{
            position: absolute;
            width: 100px;
            top: 310px;
            left: 30px;
        }
    </style>
</head>
<body>
    <div id="synthe">
        ...
    </div>
    <div id='taffiche'>
        
    </div>
    <img src="images/logos2.png" alt="Logo de Au Canap" id='logo'>
</body>
<script type="text/javascript" src="front.js?a=<?php echo rand(0,1000000)  ?>"></script>

</html>