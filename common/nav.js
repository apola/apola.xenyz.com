
window.onload = function()
{
  SetSelectedMenuItem();
};

function SetSelectedMenuItem()
{
  var select = document.getElementById("menu-narrow");
  for (var i = 0; i < select.options.length; i++)
  {
    if (select.options[i].value == window.location.pathname)
    {
      select.options[i].selected = true;
      break;
    }
  }
}
