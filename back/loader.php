<?php

$uploaddir = '../images/';
$uploadfile = $uploaddir . basename($_FILES['nouvelleImage']['name']);


move_uploaded_file($_FILES['nouvelleImage']['tmp_name'], $uploadfile);

echo $uploadfile;
?>