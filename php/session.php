<?php

require_once "header.php";

$token = $_POST["token"];
$email = $redis->get($token);

$readObj = new MongoDB\Driver\Query(["email" => $email]);
$cursor = $mongo->executeQuery("guvi.users", $readObj);
$user = $cursor->toArray();

if ($email && $email !== "" && $user && $user[0]) {
    echo json_encode([
        "status" => "success",
        "message" => "SUCCESSFULLY_LOGIN",
        "email" => $email,
        "name" => $user[0]->name,
        "mobile" => $user[0]->mobile,
        "gender" => $user[0]->gender,
        "age" => $user[0]->age,
        "dateOfBirth" => $user[0]->dob,
        "degree" => $user[0]->degree,
        "dept" => $user[0]->dept,
        "percentage" => $user[0]->percentage,
        "backlog" => $user[0]->backlog
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "INVALID_TOKEN"
    ]);
}