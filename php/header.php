<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$mysqli = new mysqli("localhost","root","","guvi");
if ($mysqli->connect_error) {
    echo "Connection failed: " . $mysqli->connect_error;
    exit();
}

$redis = new Redis();
$redis->connect('localhost');

$mongo = new MongoDB\Driver\Manager("mongodb://localhost:27017");
?>