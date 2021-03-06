<!DOCTYPE HTML>
<html>

  <head>

    <title>
      Chat
    </title>

    <?php include("../common/head.html"); ?>

    <link rel="stylesheet" type="text/css" href="chat.css">
    <script type="text/javascript" src="chat.js"></script>

  </head>

  <body>

    <?php include("../common/nav.html"); ?>

    <div class="content">

      <div class="content-center">

        <?php
          include("login.php"); //handles login and register
          //include("settings.php"); //handles user settings

          if (isset($_SESSION["login_user"]))
          {
          ?>
            <div id="userbox" class="stdbg">

              <h2>
                Welcome, <?php echo $_SESSION["login_user"]; ?>
              </h2>

              <form method="post">

                <p>
                  <!--a id="btnSettings" href="#" onclick="ShowSettings();">Settings</a-->
                  <a id="btnLogout" href="logout.php">Logout</a>
                </p>

                <!--p id="settings" style="display: <?php if ($settingserror != "") { echo "block"; } else { echo "none"; } ?>;">
                  Enter Password to change settings: <input id="txtPassword" name="password" type="password">
                  <br>
                  <input id="txtNewPassword" name="newpassword" type="password" placeholder="New Password">
                  <input id="txtConfirmNewPassword" name="confirmnewpassword" type="password" placeholder="Confirm New Password">
                  <br>
                  <input id="btnSave" name="save" type="submit" value="Save">

                  <br><br><span style="color:red"><?php echo $settingserror; ?></span>
                </p-->

              </form>

            </div>

            <div id="chatbox" class="stdbg">

              <form onsubmit="SendMessage(); return false;"> <!-- return false prevents page from reloading -->

                <div id="messages">
                  <script>
                    GetMessages();
                    setInterval(function() { GetMessages(); }, 2000); // Get new messages every 2 seconds
                    setTimeout(function() { ScrollToBottom(false) }, 100); // Scroll to bottom on startup after loading messages
                  </script>
                </div>

                <input id="txtMessage" name="message" type="text" placeholder="Message" autofocus>
                <input id="btnSend" name="send" type="submit" value="Send">

              </form>

              <p id="senderror" class="error"></p>

            </div>
          <?php
          }
          else
          {
          ?>
            <div id="loginbox" class="stdbg">

              <h2>
                Login
              </h2>

              <form method="post" onsubmit="return VerifyLogin();">

                <p>
                  <input id="txtUsername" name="username" type="text" placeholder="Username" value="<?php if (isset($_POST["username"])) { echo $_POST["username"]; } ?>">
                  <input id="txtPassword" name="password" type="password" placeholder="Password" value="<?php if (isset($_POST["password"])) { echo $_POST["password"]; } ?>">
                  <br>
                  <input id="btnLogin" name="login" type="submit" value="Login">
                  <input id="btnRegister" name="register" type="submit" value="Register">
                </p>

                <?php if ($loginerror != "") { echo "<p style=\"color: red\">$loginerror</p>"; } ?>

              </form>

            </div>
          <?php
          }
        ?>

      </div>

    </div>

    <?php include("../common/footer.html"); ?>

  </body>

</html>
