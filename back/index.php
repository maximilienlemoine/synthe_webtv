<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styleback.css">
    <script src="../jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../socket.io.js"></script>
    <title>Synthé 1.0</title>
</head>
<body>
    <section>
        <article>
            <div id='gcom'>
                <h2>Commentaire</h2>
                <input type="text" id="info">
                <button id="comlance"><i class="bi bi-arrow-right-square-fill"></i> Lancer</button>
                <button id="comrentre"><i class="bi bi-arrow-left-square-fill"></i> Rentrer</button>
            </div><!-- gtitre -->
        </article>
        <article>
            <div id='gtimer'> 
                <h2>Timer</h2>
                <div class='temps'>
                    00:00
                </div><!-- Temps -->
                <input type="number" id="tini" placeholder="Minutes uniquement">
                <div id='tbutton'>
                    <button id="tempsplay"><i class="bi bi-play-fill"></i> Play</button>
                    <button id="tempspause"><i class="bi bi-pause-fill"></i> Pause</button>
                    <button id="tempshide"><i class="bi bi-eye-slash-fill"></i> Cacher</button>
                    <button id="tempsshow"><i class="bi bi-eye-fill"></i> Montrer</button>
                </div><!-- tbutton -->
                
            </div><!-- gtimer -->
        </article>
        <article>
            <div id='glogo'>
                <h2>Logo</h2>
                <button id="lhide"><i class="bi bi-eye-slash-fill"></i> Cacher</button>
                <button id="lshow"><i class="bi bi-eye-fill"></i> Montrer</button>
                <img src="../images/logos2.png" alt="Logo webtv">
            </div><!-- logo -->
        </article>
    </section>
</body>
<script type="text/javascript" src="back.js?a=<?php echo rand(0,1000000)  ?>"></script>
</html>
