<!--DOCTYPE HTML>
<html>
<head></head>
<body>
<div style="position:absolute;top:30%;left:50%;width:200px;height:100px;margin:-50px 0 0 -100px;text-align:center"-->
<?php
$pass = htmlspecialchars($_POST["pass"]);
$basename = htmlspecialchars($_POST["file"]);
if ($pass == "tokidokidokidoki")
{
    if (strpos($basename, "/")
    ||  strpos($basename, "\\")
    ||  strpos($basename, ".."))
    {
        echo "No fucking around. Back you go.";
    }
    else
    {
        if (file_exists("/var/www/img/uploads/$basename"))
        {
            if (unlink("/var/www/img/uploads/$basename"))
            {
                echo "File deleted.";
            }
            else
            {
                echo "Unable to delete file.";
            }
        }
        else
        {
            echo "File does not exist. Are you trying to do something suspicious?";
        }
    }
}
else
{
    echo "Incorrect password.";
}

//echo "<br><br>Redirecting in 2 seconds...";
//header("refresh:2,url=index.php");

?>

<!--/div>
</body>
</html-->
