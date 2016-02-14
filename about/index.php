<!DOCTYPE HTML>
<html>

  <head>

    <title>
      About
    </title>

    <?php include("../common/head.html"); ?>

    <link rel="stylesheet" type="text/css" href="about.css">
    <script type="text/javascript" src="about.js"></script>
  </head>

  <body>

    <?php include("../common/nav.html"); ?>

    <div class="content">

      <div class="content-center">

        <div class="stdbg">

          <h2>
            Hello!
          </h2>

          <p>
            I'm Mike Buckley, an aspiring front-end web/software developer.<br>
            Thank you for taking the time to browse my site.<br>
          </p>

          <p>
            The latest version of my resume can be downloaded <a href="Resume.docx">here</a>.<br>
            For some examples of my work, please check out the <a href="../projects/index.php">Projects</a> page.
          </p>

          <p>
            If you would like to get in touch with me,<br> please <a href="mailto:mjbuckley@cinci.rr.com">email me at mjbuckley@cinci.rr.com</a>.
          </p>

          <hr>

          <p>
            <h3>
              Fun facts about the site:
            </h4>

            <ul style="text-align: left">
              <li>Everything on this site is coded entirely by hand, without the use of a CMS such as Drupal or Wordpress</li>
              <li>The <a href="../images/index.php">Images</a> and <a href="../chat/index.php">Chat</a> pages use MySQL and PHP to store images, messages, and users</li>
              <li>The <a href="../chat/index.php">Chat</a> page uses AJAX and jQuery to handle sending and receiving messages</li>
              <li>The animation on the <a href="../stars/index.php">Stars</a> page is coded entirely in Javascript</li>
            </ul>
          </p>

          <hr>

          <p>
            <span style="font-weight: bold">A small disclaimer</span>: The code for the animation on the <a href="../stars/index.php">Stars</a> page is not entirely of my own creation;
            I found the original code on another website, and, with the permission of the owner, copied it over to my site with a number of cosmetic changes and functions added.
          </p>

        </div>

      </div>

    </div>

    <?php include("../common/footer.html"); ?>

  </body>

</html>
