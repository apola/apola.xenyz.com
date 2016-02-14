<?php

function getImages()
{
  $mysqli = new mysqli("localhost", "root", "iamthebuddha", "images");

  if ($mysqli->connect_error)
  {
    die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
  }

  $results = $mysqli->query("
    SELECT
      Path,
      ThumbnailPath,
      DATE_FORMAT(TimeUploaded, '%m-%d-%y %H:%i') AS TimeUploaded,
      Name
    FROM
      uploads 
    ORDER BY
      TimeUploaded
  ");

  if ($results->num_rows == 0)
  {
    echo "No images uploaded yet.";
  }
  else
  {
    echo "<table id='uploadlist'>";
    echo "<tr><th>Uploaded</th><th>File</th></tr>";
    $i = 0; //when $i is odd, make the row a different color
    while ($row = $results->fetch_assoc())
    {
      echo "<tr" . ($i % 2 == 0 ? " class='alt'" : "") . "><td>" . $row["TimeUploaded"] . "</td><td><a href='" . $row["Path"] . "' onmouseover='over(\"" . $row["ThumbnailPath"] . "\")' onmouseout='revo()'>" . $row["Name"] . "</a></td></tr>";
      $i += 1;
    }
    echo "</table>";
  }

  $mysqli->close();
}

?>
