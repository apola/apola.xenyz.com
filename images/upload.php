
<?php

$uploaderror = "";

$UPLOADS_FOLDER = "uploads/";
$THUMBS_FOLDER = "uploads/thumbnails/";

function CreateThumbnail($path, $thumbpath, $thumbwidth)
{
  $ext = pathinfo($path, PATHINFO_EXTENSION);

  if ($ext == "jpg")
    $image = imagecreatefromjpeg("$path");
  elseif ($ext == "png")
    $image = imagecreatefrompng("$path");
  elseif ($ext == "gif")
    $image = imagecreatefromgif("$path");

  $width = imagesx($image);
  $height = imagesy($image);

  $new_width = $thumbwidth;
  $new_height = floor($height * ($thumbwidth / $width));

  $tmp_image = imagecreatetruecolor($new_width, $new_height);

  imagecopyresized($tmp_image, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

  if ($ext == "jpg")
    imagejpeg($tmp_image, $thumbpath);
  elseif ($ext == "png")
    imagepng($tmp_image, $thumbpath);
  elseif ($ext == "gif")
    imagegif($tmp_image, $thumbpath);
}

if (isset($_POST["upload"]))
{
  if ($_FILES["image"]["error"] == UPLOAD_ERR_NO_FILE)
  {
    $uploaderror = "Please select an image to upload.";
  }
  elseif (empty($_POST["password"]))
  {
    $uploaderror = "Please enter the password.";
  }
  else
  {
    $password = $_POST["password"];

    if ($password != "sometimes")
    {
      $uploaderror = "Invalid password.";
    }
    else
    {
      if ((($_FILES["image"]["type"] == "image/gif")
      || ($_FILES["image"]["type"] == "image/jpeg")
      || ($_FILES["image"]["type"] == "image/jpg")
      || ($_FILES["image"]["type"] == "image/pjpeg")
      || ($_FILES["image"]["type"] == "image/x-png")
      || ($_FILES["image"]["type"] == "image/png"))
      && ($_FILES["image"]["size"] < 10485760)) //10 megabytes
      {
        if ($_FILES["image"]["error"] > 0)
        {
          $uploaderror = "Error: " . $_FILES["img"]["error"] . "<br>";
        }
        else
        {
          $mysqli = new mysqli("localhost", "root", "iamthebuddha", "images");

          if ($mysqli->connect_error)
          {
            die("Error: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
          }

          $ext = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION); //get extension of uploaded file so that we can save it with the same extension but a different name

          $timeuploaded = time();
          $path = $UPLOADS_FOLDER . $timeuploaded . "." . $ext;
          $thumbpath = $THUMBS_FOLDER . $timeuploaded . "s." . $ext; //add an s to make it different from the normal image (i chose "s" specifically because that's what 4chan does)
          $name = $_FILES["image"]["name"];

          $success = $mysqli->query("
            INSERT INTO uploads (Path, ThumbnailPath, Name)
            VALUES ('$path', '$thumbpath', '$name')
          ");

          if ($success == false)
          {
            $uploaderror = $mysqli->error;
          }
          else
          {
            move_uploaded_file($_FILES["image"]["tmp_name"], $path);
            CreateThumbnail($path, $thumbpath, 100);
          }

          $mysqli->close();
        }
      }
      else
      {
        $uploaderror = "That filetype is not supported.";
      }
    }
  }
}

?>
