<?php

session_start(); // $_SESSION["login_user"] requires session to be running

$mysqli = new mysqli("localhost", "root", "iamthebuddha", "chat");

if ($mysqli->connect_error)
{
  die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
}

// Prevent SQL injection
$username = $_SESSION["login_user"];
$message = $mysqli->real_escape_string($_GET["message"]);

// Get User ID of user
$results = $mysqli->query("
  SELECT UserID
  FROM users
  WHERE Username = '$username'
");
$row = $results->fetch_assoc();
$userid = $row["UserID"];

// Insert User ID and Message
$results = $mysqli->query("
  INSERT INTO messages (UserID, Message)
  VALUES ($userid, '$message')
");

$mysqli->close();

?>
