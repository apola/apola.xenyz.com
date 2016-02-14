/* A comment of "cbaft" means to "come back and fix this" */
/* TO DO:
    - separate functions by a blank line
    - go through all the cbaft commented parts
    - rename variables and functions to something a little more fucking readable
    - rename functions (i.e. toggle_text -> toggle_overlay)
    - move functions around so that they're in a more logical order physically
*/

/* cbaft */
/* these functions are all each on one line */
function $i(id) { return document.getElementById(id); }
function $r(parent,child) { (document.getElementById(parent)).removeChild(document.getElementById(child)); }
function $t(name) { return document.getElementsByTagName(name); }
function $c(code) { return String.fromCharCode(code); }
function $h(value) { return ('0'+Math.max(0,Math.min(255,Math.round(value))).toString(16)).slice(-2); }
function _i(id,value) { $t('div')[id].innerHTML+=value; }
function _h(value) { return !hires?value:Math.round(value/2); }
function get_screen_size()
{
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    return Array(w,h);
}
var url = document.location.href;
var flag = true;
var test = true;
/* cbaft */
/* this is a clusterfuck */
var n = parseInt((url.indexOf('n = ') != -1) ? url.substring(url.indexOf('n = ') + 2, ((url.substring(url.indexOf('n = ') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('n = ') + 2 + (url.substring(url.indexOf('n = ') + 2, url.length)).indexOf('&') : url.length) : 500);
var w = 0;
var h = 0;
var x = 0;
var y = 0;
var z = 0;
var rf = 255;
var gf = 255;
var bf = 255;
var rb = 0;
var gb = 0;
var bb = 0;
var star_color_ratio = 0;
var star_x_save, star_y_save;
var star_ratio = 256;
var star_speed = 4;
var star_speed_save = 0;
var star = new Array(n);
var opacity = 0.1;
var cursor_x = 0;
var cursor_y = 0;
var mouse_x = 0;
var mouse_y = 0;
var canvas_x = 0;
var canvas_y = 0;
var canvas_w= 0 ;
var canvas_h= 0 ;
var context;
var key;
var ctrl;
var timeout;
var fps = 0;
function change_bg_color()
{
    if (context.fillStyle.indexOf("rgba") != -1)
    {
        context.fillStyle = 'rgba(' + rb + ', ' + gb + ', ' + bb + ', ' + opacity + ')';
    }
    else
    {
        context.fillStyle = 'rgb(' + rb + ', ' + gb + ', ' + bb + ')';
    }
}
function init()
{
    var a = 0;
    for(var i = 0; i < n; i++)
    {
        star[i] = new Array(5);
        star[i][0] = Math.random() * w * 2 - x * 2;
        star[i][1] = Math.random() * h * 2 - y * 2;
        star[i][2] = Math.round(Math.random() * z);
        star[i][3] = 0;
        star[i][4] = 0;
    }
    var starfield = $i('starfield');
    starfield.style.position = 'absolute';
    starfield.width = w;
    starfield.height = h;
    context=starfield.getContext('2d');
    change_bg_color();
    context.strokeStyle = 'rgb(' + rf + ', ' + gf + ', ' + bf + ')';
    $i('rf').innerHTML = rf;
    $i('gf').innerHTML = gf;
    $i('bf').innerHTML = bf;
    $i('rb').innerHTML = rb;
    $i('gb').innerHTML = gb;
    $i('bb').innerHTML = bb;
    $i('speed').innerHTML = star_speed;
    $i('stars').innerHTML = n;
}
function anim()
{
    mouse_x = cursor_x - x;
    mouse_y = cursor_y - y;
    context.fillRect(0, 0, w, h);
    for(var i = 0; i < n; i++)
    {
        test = true;
        star_x_save = star[i][3];
        star_y_save = star[i][4];
        /* cbaft */
        /* the ifs are on the same line ? */
        star[i][0] += mouse_x >> 4; if (star[i][0] > x << 1) { star[i][0] -= w << 1; test = false; } if (star[i][0] < -x << 1) { star[i][0] += w << 1; test = false; }
        star[i][1] += mouse_y >> 4; if (star[i][1] > y << 1) { star[i][1] -= h << 1; test = false; } if (star[i][1] < -y << 1) { star[i][1] += h << 1; test = false; }
        star[i][2] -= star_speed; if (star[i][2] > z) { star[i][2] -= z; test = false; } if (star[i][2] < 0) { star[i][2] += z; test = false; }
        star[i][3] = x + (star[i][0] / star[i][2]) * star_ratio;
        star[i][4] = y + (star[i][1] / star[i][2]) * star_ratio;
        if (star_x_save > 0 && star_x_save < w && star_y_save > 0 && star_y_save < h && test)
        {
            context.lineWidth = (1 - star_color_ratio * star[i][2]) * 2;
            context.beginPath();
            context.moveTo(star_x_save, star_y_save);
            context.lineTo(star[i][3], star[i][4]);
            context.stroke();
            context.closePath();
        }
    }
    timeout = setTimeout('anim()', fps);
}
function move(evt)
{
    evt = evt || event;
    cursor_x = evt.pageX - canvas_x;
    cursor_y = evt.pageY - canvas_y;
}
function speed_up()
{
    if (star_speed > 0)
    {
        star_speed += 0.5;
    }
    else if (star_speed < 0)
    {
        star_speed -= 0.5;
    }
}
function slow_down()
{
    if (star_speed > 1)
    {
        star_speed -= 0.5;
    }
    else if (star_speed < -1)
    {
        star_speed += 0.5;
    }
}
function key_manager(evt)
{
    evt = evt || event;
    key = evt.which || evt.keyCode;
    switch(key)
    {
        case 112: /* P */
			flag = flag ? false : true;
            if(flag)
            {
                timeout = setTimeout('anim()', fps);
            }
            else
            {
                clearTimeout(timeout);
            }
            break;
        case 32: /* Space */
            star_speed_save = (star_speed) ? star_speed : star_speed_save;
            star_speed = (star_speed) ? 0 : star_speed_save;
            break;
        case 13: /* Enter */
            context.fillStyle = 'rgba(' + rb + ', ' + gb + ', ' + bb + ', ' + opacity + ')';
            break;
        case 111: /* O */
            if (context.fillStyle.indexOf("rgba") == -1)
            {
                context.fillStyle = 'rgba(' + rb + ', ' + gb + ', ' + bb + ', ' + opacity + ')';
            }
            else
            {
                context.fillStyle = 'rgb(' + rb + ', ' + gb + ', ' + bb + ')';
            }
            break;
        case 99: /* C */
            document.body.style.cursor = (document.body.style.cursor == "none") ? "auto" : "none";
            break;
        case 120: /* X */
            star_speed *= -1;
            break;
        case 113: /* Q */
            rf += (rf < 255) ? 5 : 0;
            break;
        case 97: /* A */
            rf += (rf > 0) ? -5 : 0;
            break;
        case 119: /* W */
            gf += (gf < 255) ? 5 : 0;
            break;
        case 115: /* S */
            gf += (gf > 0) ? -5 : 0;
            break;
        case 101: /* E */
            bf += (bf < 255) ? 5 : 0;
            break;
        case 100: /* D */
            bf += (bf > 0) ? -5 : 0;
            break;
        case 114: /* R */
            rb += (rb < 255) ? 5 : 0;
            change_bg_color();
            break;
        case 102: /* F */
            rb += (rb > 0) ? -5 : 0;
            change_bg_color();
            break;
        case 116: /* T */
            gb += (gb < 255) ? 5 : 0;
            change_bg_color();
            break;
        case 103: /* G */
            gb += (gb > 0) ? -5 : 0;
            change_bg_color();
            break;
        case 121: /* Y */
            bb += (bb < 255) ? 5 : 0;
            change_bg_color();
            break;
        case 104: /* H */
            bb += (bb > 0) ? -5 : 0;
            change_bg_color();
            break;
        case 43: /* + */
        case 61: /* = */ /* this is so you don't have to hold shift while pressing the key to speed up */
            speed_up();
            break;
        case 45: /* - */
            slow_down();
            break;
        case 117: /* U */
            n += 25;
            init();
            break;
        case 106: /* J */
            n -= (n > 0) ? 25 : 0;
            init();
            break;  
        case 122: /* Z */
            toggle_text();
            break;
    }
    context.strokeStyle = 'rgb(' + rf + ', ' + gf + ', ' + bf + ')';
    $i('rf').innerHTML = rf;
    $i('gf').innerHTML = gf;
    $i('bf').innerHTML = bf;
    $i('rb').innerHTML = rb;
    $i('gb').innerHTML = gb;
    $i('bb').innerHTML = bb;
    $i('speed').innerHTML = star_speed;
    $i('stars').innerHTML = n;
    top.status = 'key = ' + ((key < 100) ? '0' : '') + ((key < 10) ? '0' : '') + key;
}
function toggle_text()
{
    var content = $i("content");
    var nav = $i("nav");
    var footer = $i("footer");
    if (content.style.display != "none")
    {
        content.style.display = "none";
        nav.style.display = "none";
        footer.style.display = "none";
    }
    else 
    {
        content.style.display = "block";
        nav.style.display = "block";
        footer.style.display = "block";
    }
}
function release()
{
    switch(key)
    {
        case 13: /* Enter */
            context.fillStyle = 'rgb(' + rb + ', ' + gb + ', ' + bb + ')';
            break;
    }
}
function mouse_wheel(evt)
{
    evt = evt || event;
    var delta = 0;
    if (evt.wheelDelta)
    {
        delta = evt.wheelDelta / 120;
    }
    else if (evt.detail)
    {
        delta =- evt.detail / 3;
    }
    if (delta >= 0)
    {
        if (star_speed > 0)
        {
            star_speed += 0.5;
        }
        else if (star_speed < 0)
        {
            star_speed -= 0.5
        }
    }
    else
    {
        if (star_speed > 1)
        {
            star_speed -= 0.5;
        }
        else if (star_speed < -1)
        {
            star_speed += 0.5;
        }
    }
    if (evt.preventDefault)
    {
        evt.preventDefault();
    }
    $i('speed').innerHTML = star_speed;
}
function start()
{
    resize();
    anim();
}
function resize()
{
    /* cbaft */
    /* these two lines are clusterfucks */
    w = parseInt((url.indexOf('w = ') != -1) ? url.substring(url.indexOf('w = ') + 2, ((url.substring(url.indexOf('w = ') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('w = ') + 2 + (url.substring(url.indexOf('w = ') + 2, url.length)).indexOf('&') : url.length) : get_screen_size()[0]);
    h = parseInt((url.indexOf('h = ') != -1) ? url.substring(url.indexOf('h = ') + 2, ((url.substring(url.indexOf('h = ') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('h = ') + 2 + (url.substring(url.indexOf('h = ') + 2, url.length)).indexOf('&') : url.length) : get_screen_size()[1]);
    x = Math.round(w / 2);
    y = Math.round(h / 2);
    z = (w + h) / 2;
    star_color_ratio = 1 / z;
    cursor_x = x;
    cursor_y = y;
    init();
}
document.onmousemove = move;
document.onkeypress = key_manager;
document.onkeyup = release;
document.onmousewheel = mouse_wheel;
if (window.addEventListener)
{
    window.addEventListener('DOMMouseScroll', mouse_wheel, false);
}