<?php

require_once "header.php";

$payload = $_POST;
$name = $_POST["name"] ? $_POST["name"] : "";
$email = $_POST["email"] ? $_POST["email"] : "";
$mobile = $_POST["mobile"] ? $_POST["mobile"] : "";
$gender = $_POST["gender"] ? $_POST["gender"] : "";
$password = $_POST["password"] ? $_POST["password"] : "";

$selectResult = "SELECT `email`FROM `users` WHERE `email` = ?";
$stmt = $mysqli->prepare($selectResult);
$stmt->bind_param("s", $email);
$stmt->execute();
$emailResult= $stmt->get_result();
$emailResultArray = iterator_to_array($emailResult);
if ($emailResultArray && $emailResultArray[0] && $emailResultArray[0]["email"]) {
    echo json_encode([
        "status" => "error",
        "message" => "USER_ALREADY_REGISTER"
    ]);
} else {
    $sql ="INSERT INTO `users`(`email`,`password`) VALUES(?,?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();

    $writeObj = new MongoDB\Driver\BulkWrite();
	$writeObj->insert([
        "email" => $email,
        "password" => $password,
        "name" => $name,
        "mobile" => $mobile,
        "gender" => $gender
    ]);
    $cursor = $mongo->executeBulkWrite("guvi.users", $writeObj);
    echo json_encode([
        "status" => "success",
        "message" => "SUCCESSFULLY_REGISTER"
    ]);
    
}

?>