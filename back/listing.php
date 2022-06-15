<?php 
echo '<?xml version="1.0" encoding="UTF-8"?> <sites>';


$dir = opendir("../images/");

while($file = readdir($dir)) {
	$chaine= explode(".", $file);
	$extension=$chaine[1];
	if($file!='.' && $file!='..'&&($extension=="jpg"||$extension=="gif"||$extension=="png")){

				//$chaine= explode(".", $file);
				//$lelogin=$chaine[0];

				echo "<image>

						<photo>$file</photo>

						

					  </image>";

				}

}

closedir($dir);
?>