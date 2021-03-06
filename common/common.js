
function SetCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
} 

function GetCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
  }
  return "";
}

function GetBrowserWidth()
{
  if (window.innerWidth)
  {
    return window.innerWidth;
  }
  else if (document.documentElement && document.documentElement.clientWidth != 0)
  {
    return document.documentElement.clientWidth;
  }
  else if (document.body)
  {
    return document.body.clientWidth;
  }
  return 0;
}
