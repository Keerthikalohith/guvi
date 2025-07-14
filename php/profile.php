<?php
// ini_set('display_errors', 1);    
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$payload = $_POST;
$userName = $_POST["userName"] ??"";
$email=$_POST["emailId"] ??"";
$age=$_POST["age"] ??"";
$dateOfBirth=$_POST["dateOfBirth"] ??"";
$degree=$_POST["degree"] ??"";
$dept=$_POST["dept"] ??"";
$percentage=$_POST["percentage"] ??"";
$backlog=$_POST["backlog"] ??"";
$mysqli = new mysqli("localhost","root","","guvi");
$sql = "SELECT `email` FROM `users` WHERE `email`='$email'";
$result=$mysqli->query($sql);
$sqlResult= iterator_to_array($result);
if($sqlResult&&$sqlResult[0]&&$sqlResult[0]["email"]){
$updateData= "UPDATE `users` SET `userName`='$userName', `age`= '$age',`dob`='$dateOfBirth',`degree`='$degree',`dept`='$dept',`percentage`='$percentage',`backlog`='$backlog' WHERE `email`='$email'";
$updateDataResult=$mysqli->query($updateData);
if($updateDataResult && $mysqli-> affected_rows > 0){
echo "PROFILE_UPDATE";
}else if($updateDataResult && $mysqli->affected_query ===0){
    echo "PROFILE_NOT_UPDATE";
}else{
    echo "PROFILE_UPDATED_FAIL";
}


}


?>