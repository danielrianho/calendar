<?php

 $json = array();
 $request = "SELECT * FROM events_sound ORDER BY id";
 
 try {
 $bdd = new PDO('mysql:host=localhost;dbname=calendar', 'root', 'root');
 } catch(Exception $e) {
    exit('No connection to database');
 }

 $resultat = $bdd->query($request) or die(print_r($bdd->errorInfo()));
 
 echo json_encode($resultat->fetchAll(PDO::FETCH_ASSOC));
