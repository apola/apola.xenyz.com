
function GetMessages()
{
  if (window.XMLHttpRequest) // IE7+, Firefox, Chrome, Opera, Safari
  {
    xmlhttp = new XMLHttpRequest();
  }
  else // IE5, IE6
  {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function()
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      $("#messages").html(xmlhttp.responseText);
      ScrollToBottom(true);
    }
  };

  xmlhttp.open("GET", "getmessages.php", true);
  xmlhttp.send();

}

function SendMessage()
{
  // Make sure user entered a message
  if ($("#txtMessage").val() == "")
  {
    $("#senderror").html("Please enter a message.");
    $("#senderror").show();
    $("#txtMessage").focus();
  }
  else
  {
    if (window.XMLHttpRequest) // IE7+, Firefox, Chrome, Opera, Safari
    {
      xmlhttp = new XMLHttpRequest();
    }
    else // IE5, IE6
    {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function()
    {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        $("#txtMessage").val("");
      }
    };

    xmlhttp.open("GET", "sendmessage.php?message=" + $("#txtMessage").val(), true);
    xmlhttp.send();

    // Hide error message if it was shown
    $("#senderror").hide();
  }
}

function ScrollToBottom(butOnlyIfAlreadyAtBottom)
{
  var messages = document.getElementById("messages");

  if (butOnlyIfAlreadyAtBottom)
  {
    // 100 pixels = ~4 lines of text; i.e. scroll down only if user is within 4 lines of text from the bottom
    var isScrolledToBottom = messages.scrollHeight - messages.offsetHeight - messages.scrollTop < 100
  
    if (isScrolledToBottom)
    {
      messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
  }
  else
  {
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
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
