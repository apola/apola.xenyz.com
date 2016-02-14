<!DOCTYPE HTML>
<html>

  <head>

    <title>
      starfield
    </title>

    <?php include("../common/head.html"); ?>

    <link rel="stylesheet" type="text/css" href="stars.css">
    <script type="text/javascript" src="stars.js"></script>

  </head>

  <body onload="start()" onresize="resize()" onmousedown="context.fillStyle='rgba('+rb+','+gb+','+bb+','+opacity+')'" onmouseup="context.fillStyle='rgb('+rb+','+gb+','+bb+')'">

     <!-- credit for the original animation must go to REZ at chipetune.com;
    i found it at digzine.com, however, and have significantly cleaned up the javascript and added most of the cosmetic functionality -->

    <?php include("../common/nav.html"); ?>

    <canvas id="starfield"></canvas>

    <div class="content">

      <div id="controls" class="stdbg">

        <h2>
          Controls
        </h2>

        <table id="controlstable" class="starstable">

          <tr>  <th colspan="2">General controls</th>               </tr>
          <tr>  <td>Z</td>               <td>Toggle overlay</td>    </tr>
          <tr>  <td>C</td>               <td>Toggle mouse</td>      </tr>
          <tr>  <td>P</td>               <td>Pause</td>             </tr>
          <tr>  <td>Click<br>Enter</td>  <td>Temporarily warp</td>  </tr>
          <tr>  <td>O</td>               <td>Toggle warp</td>       </tr>
          <tr>  <td>X</td>               <td>Turn around</td>       </tr>
          <tr>  <td>Space</td>           <td>Go sideways</td>       </tr>
          <tr>  <td>Scroll<br>+ -</td>   <td>Change speed</td>      </tr>
          <tr>  <td>U</td>               <td>More stars</td>        </tr>
          <tr>  <td>J</td>               <td>Less stars</td>        </tr>

          <tr>  <th colspan="2">Color controls</th>                                           </tr>
          <tr>  <td>Q</td>  <td>Make stars more <span style="color: red">red</span></td>      </tr>
          <tr>  <td>A</td>  <td>Make stars less <span style="color: red">red</span></td>      </tr>
          <tr>  <td>W</td>  <td>Make stars more <span style="color: green">green</span></td>  </tr>
          <tr>  <td>S</td>  <td>Make stars less <span style="color: green">green</span></td>  </tr>
          <tr>  <td>E</td>  <td>Make stars more <span style="color: blue">blue</span></td>    </tr>
          <tr>  <td>D</td>  <td>Make stars less <span style="color: blue">blue</span></td>    </tr>
          <tr>  <td>R</td>  <td>Make space more <span style="color: red">red</span></td>      </tr>
          <tr>  <td>F</td>  <td>Make space less <span style="color: red">red</span></td>      </tr>
          <tr>  <td>T</td>  <td>Make space more <span style="color: green">green</span></td>  </tr>
          <tr>  <td>G</td>  <td>Make space less <span style="color: green">green</span></td>  </tr>
          <tr>  <td>Y</td>  <td>Make space more <span style="color: blue">blue</span></td>    </tr>
          <tr>  <td>H</td>  <td>Make space less <span style="color: blue">blue</span></td>    </tr>

        </table>

      </div>

      <div id="settings" class="stdbg">

        <h2>
          Settings
        </h2>

        <table id="settingstable" class="starstable">

          <tr>  <th colspan="2">General settings</th>      </tr>
          <tr>  <td>Star speed</td>  <td id="speed"></td>  </tr>
          <tr>  <td>Star count</td>  <td id="stars"></td>  </tr>

          <tr>  <th colspan="2">Color settings</th>                                        </tr>
          <tr>  <td>Star <span style="color: red">red</span></td>     <td id="rf"></td>    </tr>
          <tr>  <td>Star <span style="color: green">green</span></td>   <td id="gf"></td>  </tr>
          <tr>  <td>Star <span style="color: blue">blue</span></td>     <td id="bf"></td>  </tr>
          <tr>  <td>Space <span style="color: red">red</span></td>    <td id="rb"></td>    </tr>
          <tr>  <td>Space <span style="color: green">green</span></td>  <td id="gb"></td>  </tr>
          <tr>  <td>Space <span style="color: blue">blue</span></td>    <td id="bb"></td>  </tr>

        </table>

      </div>

    </div>

    <?php include("../common/footer.html"); ?>

  </body>

</html>
