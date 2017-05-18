<?php
 
$title=$_POST['title'];
$email=$_POST['email'];
$start=$_POST['start'];
$end=$_POST['end'];
 
try {
$bdd = new PDO('mysql:host=localhost;dbname=calendar', 'root', 'root');
} catch(Exception $e) {
exit('No connection to database');
}
 
$sql = "INSERT INTO events (title, start, email, end) VALUES (:title, :start, :email,  :end)";
$q = $bdd->prepare($sql);
$q->execute(array(':title'=>$title, ':start'=>$start, ':email'=>$email, ':end'=>$end));