<?php

require_once "header.php";

$payload = $_POST;
$email = $_POST["email"];
$password = $_POST["password"];

if (empty($email) || empty($password)) {
    echo json_encode([
        "status" => "error",
        "message" => "EMPTY_FIELDS"
    ]);
    exit();
}

$sql = "SELECT `email`, `password` FROM `users` WHERE `email` = ?";
$stmt = $mysqli->prepare($sql);
if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "SQL_ERROR"
    ]);
    exit();
}
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$dbResult = iterator_to_array($result);
if(isset($dbResult) && $dbResult && isset($dbResult[0]) 
&& $dbResult[0] && $dbResult[0]["email"] && $dbResult[0]["email"]){
    $dbEmail = $dbResult[0]["email"];
    $dbPassword = $dbResult[0]["password"];
    if($dbEmail === $email && $dbPassword === $password){
        echo json_encode([
            "status" => "success",
            "message" => "SUCCESSFULLY_LOGIN",
            "token" => sessionToken($email, $redis)
        ]);
    }else if($dbEmail === $email && $dbPassword !== $password){
        echo json_encode([
            "status" => "error",
            "message" => "WRONG_PASSWORD"
        ]);
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "UR_NOT_REGISTER"
    ]);
}

function sessionToken($email, $redis){
    $token = false;
    while(!$token){
        $token = bin2hex(random_bytes(32));
        if(!$redis->get($token)){
            break;
        } else {
            $token = false;
        }
    }
    $redis->set($token, $email);
    return $token;
}


?>