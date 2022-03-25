<?php
// y a-t-il un fichier passé par le formulaire ?
if ( !empty($_FILES) ) {
// y a-t-il un mot de passe passé par le formulaire ?
            $nom = $_FILES['nouvelleImage']['name'];
            $nomTemporaire = $_FILES['nouvelleImage']['tmp_name'];
            $chemin ="../images/".$nom  ;
            move_uploaded_file($nomTemporaire, $chemin);
    }
    
    ?>