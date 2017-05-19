<?php
 
/* VALUES */
$id=$_POST['id'];
$title=$_POST['title'];
$email=$_POST['email'];
$start=$_POST['start'];
$end=$_POST['end'];
 
 try {
 $bdd = new PDO('mysql:host=localhost;dbname=calendar', 'root', 'root');
 } catch(Exception $e) {
    var_dump($e);
 exit('No connection to database');
 }
 
$sql = "UPDATE events SET title=?, email=?, start=?, end=? WHERE id=?";
$q = $bdd->prepare($sql);
$q->execute(array($title,$email,$start,$end,$id));