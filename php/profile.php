<?php

require_once "header.php";


$email = $redis->get($_POST["token"]);

if (!$email || $email === "") {
    echo json_encode([
        "status" => "error",
        "message" => "INVALID_TOKEN"
    ]);
    exit();
}

$payload = $_POST;
$userName = $_POST["userName"] ??"";
$age = $_POST["age"] ??"";
$dateOfBirth = $_POST["dateOfBirth"] ??"";
$degree = $_POST["degree"] ??"";
$dept = $_POST["dept"] ??"";
$percentage = $_POST["percentage"] ??"";
$backlog = $_POST["backlog"] ??"";
$gender = $_POST["gender"] ??"";


$updateObj = new MongoDB\Driver\BulkWrite();
$updateObj->update(["email" => $email], [
    '$set' => [
        "userName" => $userName,
        "age" => $age,
        "dob" => $dateOfBirth,
        "degree" => $degree,
        "dept" => $dept,
        "percentage" => $percentage,
        "backlog" => $backlog,
        "gender" => $gender
    ]
]);
$result = $mongo->executeBulkWrite("guvi.users", $updateObj);

echo json_encode([
    "status" => "success",
    "message" => "PROFILE_UPDATE"
]);


?>