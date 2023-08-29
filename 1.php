<?php
//saisie tableau2d 
$tab=array(
array('x'),
array('y')
);
//affichage tableau2d 
echo $tab[0][0];
echo $tab[0][1]

for(ligne=0; ligne<2; ligne++){
    echo"<ul>";
    for($colonne=0;$colone<2;$colone++ ){
        echo "<li> .$tab[$ligne][$colone]. </li>"
    }
echo'<:ul>'
}


