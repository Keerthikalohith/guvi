<?php

require_once "header.php";

$redis->del($_POST["token"]);

echo json_encode([
    "status" => "success",
    "message" => "SUCCESSFULLY_LOGOUT"
]);

?>