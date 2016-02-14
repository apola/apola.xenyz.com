<?php

session_set_cookie_params(60 * 60 * 24 * 7); // make the session last 7 days (keep the user logged in for a week)
session_start();
$loginerror = "";

if (isset($_POST["login"]))
{
    if (empty($_POST["username"]))
    {
        $loginerror = "Please enter your username.";
    }
    elseif (empty($_POST["password"]))
    {
        $loginerror = "Please enter your password.";
    }
    else
    {
        $mysqli = new mysqli("localhost", "root", "iamthebuddha", "chat");

        if ($mysqli->connect_error)
        {
            die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
        }

        $username = $_POST["username"];
        $password = $_POST["password"];

        // Prevent SQL injection
        $username = $mysqli->real_escape_string($username);
        $password = $mysqli->real_escape_string($password);

        $results = $mysqli->query("SELECT *
                                   FROM users
                                   WHERE Username = '$username'
                                   AND   Password = PASSWORD('$password')
                                   ");
                                
        if ($results->num_rows != 1)
        {
            $loginerror = "Invalid username or password.";
        }
        else
        {
            $_SESSION["login_user"] = $username;
        }
        
        $mysqli->close();
    }
}

elseif (isset($_POST["register"]))
{
    if (empty($_POST["username"]))
    {
        $loginerror = "Please enter your desired username into the textbox above.";
    }
    elseif (empty($_POST["password"]))
    {
        $loginerror = "Please enter your desired password into the textbox above.";
    }
    else
    {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $mysqli = new mysqli("localhost", "root", "iamthebuddha", "chat");
        
        if ($mysqli->connect_error)
        {
            die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
        }

        // Prevent SQL injection
        $username = stripslashes($username);
        $password = stripslashes($password);
        $username = $mysqli->real_escape_string($username);
        $password = $mysqli->real_escape_string($password);
        
        $results = $mysqli->query("SELECT *
                                   FROM users
                                   WHERE Username = '$username'
                                   ");
                                   
        if ($results->num_rows != 0)
        {
            $loginerror = "Username taken.";
        }
        else
        {
            $mysqli->query("INSERT INTO users (Username, Password)
                            VALUES ('$username', PASSWORD('$password'))
                            ");
            $_SESSION["login_user"] = $username;
        }
        
        $mysqli->close();
    }
}

?>