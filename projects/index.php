<!DOCTYPE HTML>
<html>

    <head>
    
        <title>
            Projects
        </title>
        
        <?php include("$_SERVER[DOCUMENT_ROOT]/common/head.html"); ?>

        <link rel="stylesheet" type="text/css" href="/projects/projects.css">
        <script type="text/javascript" src="/projects/projects.js"></script>
        
    </head>
    
    <body>
    
        <?php include("$_SERVER[DOCUMENT_ROOT]/common/nav.html"); ?>
        
        <div class="content">

            <div class="content-center">
            
                <div class="stdbg">

                    <h2>
                        Projects
                    </h2>

                    <p>
                        These projects represent just some of the work I've done.<br>
                        Source code is included in all downloads.<br>
                        <br>
                        Please keep in mind that this is an incomplete list, and I will be updating it frequently in the near future as my experience grows.
                    </p>

                </div>

                <div id="personal" class="stdbg">

                    <h2>
                        Personal
                    </h2>

                    <table class="projectlist">
                        <tr><th>Application</th>                                    <th>Language(s) Used</th>   <th>Notes</th></tr>
                        <tr><td><a href="files/Planner.zip">School Planner</a></td> <td>VB.NET</td>             <td>Was intended for use by fellow students in my high school.
                                                                                                                    Hides in the top-right corner of the screen.
                                                                                                                    Has textboxes for each of our eight class periods.
                                                                                                                    Can be set to minimize/maximize on either click or mouseover.</td></tr>
                        <!--tr><td><a href="#">Go</a></td>                             <td>Java</td>               <td>A Java rendition of the classic Japanese board game Go,
                                                                                                                   known as Igo (囲碁) in Japan. The AI is not very strong.</td></tr>
                        <tr><td><a href="#">Tetris</a></td>                         <td>Java</td>               <td>I originally wrote this in my junior year of high school,
                                                                                                                    entirely using information I learned from the internet about Java.</td></tr-->
                    </table>

                </div>
                
                <div id="school" class="stdbg">

                    <h2>
                        School
                    </h2>

                    <table class="projectlist">
                        <tr><th>Application</th>                                                                <th>Language(s) Used</th>   <th>Notes</th></tr>
                        <tr><td><a href="files/CustomerInformation.zip">Customer Information Manager</a></td>   <td>VB.NET</td>             <td>Add a customer to the database, edit his information, and delete him.
                                                                                                                                                Does not use a SQL database and does not save information between runs.</td></tr>
                    </table>

                </div>

            </div>

        </div>
        
        <?php include("$_SERVER[DOCUMENT_ROOT]/common/footer.html"); ?>
        
    </body>
    
</html>