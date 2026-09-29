<?php

$servername = "localhost";
$username = "root";
$password = "Monika@2006";
$dbname = "shopping_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>