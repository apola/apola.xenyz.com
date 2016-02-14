<?php

$messageerror = "";

function GetMessages()
{
    $mysqli = new mysqli("localhost", "root", "iamthebuddha", "chat");

    if ($mysqli->connect_error)
    {
        die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
    }
    
    $results = $mysqli->query("SELECT
                                    DATE_FORMAT(M.TimeSent, '%m-%d %H:%i') AS TimeSent,
                                    U.Username,
                                    M.Message
                               FROM
                                    users as U,
                                    messages as M
                               WHERE
                                    U.UserID = M.UserID
                               ");
                                
    if ($results->num_rows == 0)
    {
        echo "No messages yet.";
    }
    else
    {
        while ($row = $results->fetch_assoc())
        {
            echo "<span class='timestamp'>" . $row["TimeSent"] . "</span> <span class='username'>" . $row["Username"] . "</span>: " . "<span class='message'>" . $row["Message"] . "</span><br>";
        }
    }
        
    $mysqli->close();
}

if (isset($_POST["send"]))
{
    if (empty($_POST["message"]))
    {
        $messageerror = "Please enter a message.";
    }
    else
    {
        $mysqli = new mysqli("localhost", "root", "iamthebuddha", "chat");

        if ($mysqli->connect_error)
        {
            die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
        }

        // Prevent SQL injection
        $username = $_SESSION["login_user"];
        $message = $mysqli->real_escape_string($_POST["message"]);

        $results = $mysqli->query("SELECT UserID
                                   FROM users
                                   WHERE Username = '$username'
                                   ");
        $row = $results->fetch_assoc();
        $userid = $row["UserID"];

        $results = $mysqli->query("INSERT INTO messages (UserID, Message)
                                   VALUES ($userid, '$message')
                                   ");

        $mysqli->close();
    }
}

?>