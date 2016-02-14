<?php

$settingserror = "";

if (isset($_POST["save"]))
{
    if (!empty($_POST["newpassword"]))
    {
        if (empty($_POST["confirmnewpassword"]))
        {
            $settingserror = "Please confirm your new password.";
        }
    }
}

?>