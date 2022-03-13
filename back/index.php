<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script src="../jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../socket.io.js"></script>
    <title>Synthé 1.0</title>
    <style>
        #trentre{
            display: none;
        }
        #tempsshow{
            display: none;
        }
        #tempsplay{
            background-color:#1dcf4a;
            border-radius:15px;
            border:1px solid #18ab29;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:10px;
            padding:3vh;
            text-decoration:none;
        }
        #tempsplay:hover {
            background-color:#3c940d;
        }
        
        #tempspause{
            background-color:#c72828;
            border-radius:15px;
            border:1px solid #e62727;
            display: none;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:10px;
            padding:3vh;
            text-decoration:none;
        }
        #tempspause:hover {
            background-color:#ff0015;
        }
        #lshow{
            display: none;
        }
    </style>
</head>
<body>
    <div id='gtitre'>
    <h2>Titre</h2>
    <input type="text" id="info">
    <button id="tlance">Lancer</button>
    <button id="trentre">Rentrer</button>
    </div><!-- gtitre -->
    <div id='gtimer'> 
        <h2>Timer</h2>
        <input type="number" id="tini" placeholder="Minutes uniquement">
        <button id="tempsplay"><i class="bi bi-play-fill"></i> Play</button>
        <button id="tempspause"><i class="bi bi-pause-fill"></i> Pause</button>
        <button id="tempshide">Cacher</button>
        <button id="tempsshow">Montrer</button>
        <div class='temps'>
            
        </div><!-- Temps -->
    </div><!-- gtimer -->
    <div id='logo'>
        <h2>Logo</h2>
        <button id="lhide">Cacher</button>
        <button id="lshow">Montrer</button>
    </div><!-- logo -->
</body>
<script type="text/javascript" src="back.js?a=<?php echo rand(0,1000000)  ?>"></script>
</html>
