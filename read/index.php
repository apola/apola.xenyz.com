<!DOCTYPE HTML>
<html>

  <head>

    <title>
      Read
    </title>

    <?php include("../common/head.html"); ?>

    <link rel="stylesheet" type="text/css" href="read.css">
    <script type="text/javascript" src="read.js"></script>

  </head>

  <body>

    <?php include("../common/nav.html"); ?>

    <div class="content">

      <div class="content-center stdbg">

        <div id="before">

          <h2>
            Speed Reader
          </h2>

          <p>
            Copy text into the box.<br>
            Choose settings.<br>
            Press read.
          </p>

          <textarea id="text" rows="10"></textarea>

          <p>
            Speed: <input id="speed" type="number" value="400" min="50" max="2000" step="50"> <select id="units" onchange="UpdateAtATimeUnits();"><option>words</option><option>characters</option></select> / minute<br>
            Show: <input id="atatime" type="number" value="1" min="1" max="5" onchange="UpdateAtATimeUnits();"> <span id="atatimeunits"></span> at a time
          </p>

          <input id="start" type="button" value="Read" onclick="Start();">

        </div>

        <div id="after">

          <p id="output"></p>

          <input id="stop" type="button" value="Stop" onclick="Stop();">

        </div>

      </div>

    </div>

    <?php include("../common/footer.html"); ?>

  </body>

</html>
