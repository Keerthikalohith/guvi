<?php
// ini_set('display_errors', 1);    
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$payload = $_POST;
$name = $_POST["name"] ??"";
$email = $_POST["email"] ??"";
$mobile = $_POST["mobile"] ??"";
$gender = $_POST["gender"] ??"";
$password = $_POST["password"] ??"" ;
$confirmPass = $_POST["confirmPass"] ??"";
$mysqli = new mysqli("localhost","root","","guvi");
$selectResult = "SELECT `email`FROM `users` WHERE `email`='$email'";
$emailResult= $mysqli->query($selectResult);
$emailResultArray = iterator_to_array($emailResult);
if($emailResultArray && $emailResultArray[0]&& $emailResultArray[0]["email"]){
    echo "USER_ALREADY_REGISTER";
}else{
    $sql ="INSERT INTO `users`(`name`,`email`,`mobileno`,`gender`,`password`) VALUES('$name','$email','$mobile','$gender','$password')";
    $results = $mysqli->query($sql);
    echo "SUCCESSFULLY_REGISTER";
    
}
?>