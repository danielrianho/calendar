<?php
 
/* VALUES */
$id=$_POST['id'];
$title=$_POST['title'];
$start=$_POST['start'];
$end=$_POST['end'];
 
// connexion à la base de données
 try {
 $bdd = new PDO('mysql:host=localhost;dbname=calendar', 'root', 'root');
 } catch(Exception $e) {
    var_dump($e);
 exit('No connection to database');
 }
 
$sql = "UPDATE events_sound SET title=?, start=?, end=? WHERE id=?";
$q = $bdd->prepare($sql);
$q->execute(array($title,$start,$end,$id));