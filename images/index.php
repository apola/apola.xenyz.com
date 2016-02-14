<!DOCTYPE HTML>
<html>

    <head>
    
        <title>
            Images
        </title>
        
        <?php include("$_SERVER[DOCUMENT_ROOT]/common/head.html"); ?>

        <link rel="stylesheet" type="text/css" href="/images/images.css">
        <script type="text/javascript" src="/images/images.js"></script>
        
    </head>
    
    <body>
    
        <?php include("$_SERVER[DOCUMENT_ROOT]/common/nav.html"); ?>
        
        <div class="content">

            <div class="content-center">
            
                <?php
                    include("upload.php");
                    include("image.php");
                ?>
                
                <div id="uploadbox" class="stdbg">
                
                    <h2>
                        Uploa<span id="hint" title="The password to upload is 'sometimes'.">d</span>
                    </h2>
                    
                    <p>
                        Images only.<br>
                        Maximum 10 MB.
                    </p>
                    
                    <form method="post" enctype="multipart/form-data"><!--the enctype is needed to upload files-->
                    
                        <p>
                            <input id="uploadinput" type="file" name="image">
                            <br>
                            Password: <input id="txtPassword" type="password" name="password">
                            <input name="upload" type="submit" value="Upload">
                        </p>

                        <?php if ($uploaderror != "") { echo "<p><span style=\"color:red\">$uploaderror</span></p>"; } ?>
                        
                    </form>
                    
                </div>
                
                <div id="listbox" class="stdbg">
                
                    <h2>
                        Images
                    </h2>
                    
                    <p>
                        Hover for a preview.<br>
                        Click to download.
                    </p>
                    
                    <?php getImages(); ?>
                    
                </div>
                
            </div>
        
        </div>

        <?php include("$_SERVER[DOCUMENT_ROOT]/common/footer.html"); ?>
        
    </body>
    
</html>
