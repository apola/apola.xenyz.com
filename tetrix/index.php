<!DOCTYPE HTML>
<html>

    <head>

        <title>
            Tetrix
        </title>

        <?php include("$_SERVER[DOCUMENT_ROOT]/common/head.html"); ?>

        <link rel="stylesheet" type="text/css" href="/tetrix/tetrix.css">
        <script type="text/javascript" src="/tetrix/tetrix.js"></script>

    </head>

    <body onload="start()">

        <?php include("$_SERVER[DOCUMENT_ROOT]/common/nav.html"); ?>

        <div class="content">

            <canvas id="tetrix"></canvas>

        </div>

        <?php include("$_SERVER[DOCUMENT_ROOT]/common/footer.html"); ?>

    </body>

</html>