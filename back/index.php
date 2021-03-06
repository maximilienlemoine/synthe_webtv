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
    <aside>
        <h2>Choix de synthé !</h2>
        <div id='aside'>
    <div class="commentaire">
    <input class="form-check-input" type="checkbox" value="" id="Ccom">
    <label class="form-check-label" for="defaultCheck1" id='Acom'>
        Commentaire
    </label>
    </div>
    <div class="chron">
    <input class="form-check-input" type="checkbox" value="" id="Cchron">
    <label class="form-check-label" for="defaultCheck1" id='Achron'>
        Titre Chronique
    </label>
    </div>
    <div class="timer">
    <input class="form-check-input" type="checkbox" value="" id="Ctimer">
    <label class="form-check-label" for="defaultCheck1" id='Atimer'>
        Timer
    </label>
    </div>
    <div class="titre">
    <input class="form-check-input" type="checkbox" value="" id="Ctitre">
    <label class="form-check-label" for="defaultCheck1" id='Atitre'>
        Titre
    </label>
    </div>
    <div class="logo">
    <input class="form-check-input" type="checkbox" value="" id="Clogo">
    <label class="form-check-label" for="defaultCheck1" id='Alogo'>
        Logo
    </label>
    </div>
    <div class="score">
    <input class="form-check-input" type="checkbox" value="" id="Cscores">
    <label class="form-check-label" for="defaultCheck1" id='Ascores'>
        Score
    </label>
    </div>
    <div class="img">
    <input class="form-check-input" type="checkbox" value="" id="Cimg">
    <label class="form-check-label" for="defaultCheck1" id='Aimg'>
        Image
    </label>
    </div>
    </div><!-- #aside -->
    </aside>
    <section>
        <article id='arcom'>
            <div id='gcom'>
                <h2>Commentaire</h2>
                <input type="text" id="com">
                <button id="comlance"><i class="bi bi-arrow-right-square-fill"></i> Lancer</button>
                <button id="comrentre"><i class="bi bi-arrow-left-square-fill"></i> Rentrer</button>
            </div>
        </article><!-- arcom -->
        <article id='archronique'>
            <div id='gchronique'>
                <h2>Titre Chronique</h2>
                <input type="text" id="chronique">
                <button id="chronlance"><i class="bi bi-arrow-right-square-fill"></i> Lancer</button>
                <button id="chronrentre"><i class="bi bi-arrow-left-square-fill"></i> Rentrer</button>
            </div>
        </article><!-- archronique -->
        <article id='artitre'>
            <div id='gtitre'>
                <h2>Titre</h2>
                <input type="text" id="titre">
                <button id="titrelance"><i class="bi bi-arrow-right-square-fill"></i> Lancer</button>
                <button id="titrerentre"><i class="bi bi-arrow-left-square-fill"></i> Rentrer</button>
            </div>
        </div>
        </article><!-- artitre -->
        <article id='artimer' >
            <div id='gtimer'>
                <h2>Timer</h2>
                <div class='temps'>
                    00:00
                </div><!-- Temps -->
                <div id='selectime'>
                <input type="number" id="tini" placeholder="Minutes uniquement">
                </div>
                <div id='tbutton'>
                    <button id="tempsplay"><i class="bi bi-play-fill"></i> Play</button>
                    <button id="tempspause"><i class="bi bi-pause-fill"></i> Pause</button>
                    <button id="tempshide"><i class="bi bi-eye-slash-fill"></i> Cacher</button>
                    <button id="tempsshow"><i class="bi bi-eye-fill"></i> Montrer</button>
                    <button id="tempsclear"><i class="bi bi-trash-fill"></i> Clear</button>
                </div><!-- tbutton -->
                </div>
        </article><!-- artimer -->
        <article id='arlogo'>
            <div id='glogo'>
                <h2>Logo</h2>
                <button id="lhide"><i class="bi bi-eye-slash-fill"></i> Cacher</button>
                <button id="lshow"><i class="bi bi-eye-fill"></i> Montrer</button>
                <img src="../images/logos2.png" alt="Logo webtv">
            </div>
        </article><!-- arlogo -->
        <article id='arquizz'>
            <div id='gridquizz'>
            <div id='gridquiz'>
                <div id='equipe1'>
                    <p id='team1'>Equipe 1</p>
                    <div class='nteam'>
                        <input type="text" name="nomteam1" id="nomteam1">
                        <button id='confnom1'>Confirmer</button>
                    </div><!-- nteam -->
                    <div class='gscores'>
                        <button id='t1m2'>-2</button>
                        <button id='t1m1'>-1</button>
                        <button id='t10'>0</button>
                        <button id='t1p1'>+1</button>
                        <button id='t1p2'>+2</button>
                    </div> <!-- Gscores -->
                    <div class='score1'>
                        0
                    </div> <!-- Score -->
                </div> <!-- Equipe 1 -->
                <div id='equipe2'>
                    <p id='team2'>Equipe 2</p>
                    <div class='nteam'>
                        <input type="text" name="nomteam2" id="nomteam2">
                        <button id='confnom2'>Confirmer</button>
                    </div> <!-- NTeam -->
                    <div class='gscores'>
                        <button id='t2m2'>-2</button>
                        <button id='t2m1'>-1</button>
                        <button id='t20'>0</button>
                        <button id='t2p1'>+1</button>
                        <button id='t2p2'>+2</button>
                    </div> <!-- Gestion score -->
                    <div class='score2'>
                        0
                    </div> <!-- Score -->
                </div> <!-- Equipe 2 -->
            </div>
            <div id='quizzshowhide'>
            <button id='quizzshow'> <i class="bi bi-eye-fill"></i> Montrer</button>
            <button id='quizzhide'> <i class="bi bi-eye-slash-fill"></i> Cacher</button>
            <button id="quizzclearscores"><i class="bi bi-trash-fill"></i> Clear</button>
            </div> <!-- quizzshowhide -->
            </div>
        </article> <!-- arquizz -->
        <article id='arimg'>
            <div  id='images'>
            <div class="form">
                <form method="POST" id='uploadimage'  action="" enctype="multipart/form-data" class="import" target="_blank">
                <input type="file" name="nouvelleImage" id="nouvelleimage"/>
                <input type="submit" value="Ajouter" id="ajouter"/>
                </form>
            </div>
            </div>
        </article><!-- images -->
        <article>
            <div id='imagerangement'>
            </div>
        </article>
    </section>
</body>
<script type="text/javascript" src="back.js?a=<?php echo rand(0,1000000)  ?>"></script>
</html>
