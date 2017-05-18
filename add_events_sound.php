<?php
 
$title=$_POST['title'];
$start=$_POST['start'];
$end=$_POST['end'];
 
try {
$bdd = new PDO('mysql:host=localhost;dbname=calendar', 'root', 'root');
} catch(Exception $e) {
exit('No connection to database');
}
 
$sql = "INSERT INTO events_sound (title, start, end) VALUES (:title, :start, :end)";
$q = $bdd->prepare($sql);
$q->execute(array(':title'=>$title, ':start'=>$start, ':end'=>$end));