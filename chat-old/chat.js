
function ScrollToBottom()
{
    var messages = document.getElementById("messages");
    messages.scrollTop = messages.scrollHeight;
}
/*
function ShowSettings()
{
    var settings = document.getElementById("settings");
    var btnSettings = document.getElementById("btnSettings");
    if (settings.style.display == "block")
    {
        settings.style.display = "none";
        btnSettings.innerHTML = "Settings";
    }
    else
    {
        settings.style.display = "block";
        btnSettings.innerHTML = "Cancel";
    }
}
*/
