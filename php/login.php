<?php
ini_set('display_errors', 1);    
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$payload=$_POST;
$email =$_POST["email"] ??"";
$password = $_POST["password"] ??"";
$mysqli = new mysqli("localhost","root","","guvi");
$sql= "SELECT `email`, `password` FROM `users`WHERE `email`='$email'";
$result=$mysqli->query($sql);
$dbResult=iterator_to_array($result);
if(isset($dbResult) && $dbResult && isset($dbResult[0]) 
    && $dbResult[0] && $dbResult[0]["email"] && $dbResult[0]["email"]){
    $dbEmail = $dbResult[0]["email"];
    $dbPassword = $dbResult[0]["password"];
    if($dbEmail===$email && $dbPassword===$password){
        echo "SUCCESSFULLY_LOGIN";
    }else if($dbEmail===$email && $dbPassword!=$password){
        echo "WRONG_PASSWORD";
    }else if($dbEmail!=$email)  {
        echo "UR_NOT_REGISTER";
    }
}

 
 ?>