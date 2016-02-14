function over(f)
{
    $listbox = document.getElementById("listbox");
    $uploadlist = document.getElementById("uploadlist");
    $listbox.style.backgroundImage = "url('" + f + "')";
    $uploadlist.style.opacity = 0.5;
}
function revo()
{
    $listbox = document.getElementById("listbox");
    $uploadlist = document.getElementById("uploadlist");
    $listbox.style.backgroundImage = "";
    $uploadlist.style.opacity = 1;
}
