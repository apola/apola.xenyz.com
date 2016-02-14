
/*

to do:
- add font size option

*/

window.onload = function()
                {
                    SetSelectedMenuItem();
                    UpdateAtATimeUnits();
                }

function Start()
{
    Hide("before");
    Show("after");
    CountDown(3);
    timeout2 = setTimeout(function() { StartReading() }, 3000); //need to wait to start reading until the countdown finishes
}

function Stop()
{
    Hide("after");
    Show("before");
    StopReading();
}

function Hide(item)
{
    document.getElementById(item).style.display = "none";
}

function Show(item)
{
    document.getElementById(item).style.display = "block";
}

function CountDown(seconds)
{
    if (seconds > 0)
    {
        document.getElementById("output").innerHTML = seconds;
        timeout1 = setTimeout(function() { CountDown(seconds - 1) }, 1000);
    }
}

function StartReading()
{
    var text = document.getElementById("text").value.trim();
    var units = document.getElementById("units").value;
    var atatime = parseInt(document.getElementById("atatime").value);
    
    //60000 ms = 1 minute
    // * atatime because 100 words 1 word at a time requires a speed of 600ms per tick
    //but 100 words 2 words at a time requires a speed of 1800ms per tick
    var speed = parseInt((60000 / document.getElementById("speed").value) * atatime);
    
    //splitting the string into chunks first lets us use the same Read()
    //function for both words and characters
    var chunks = [];
    
    if (units == "words")
    {
        var splitbychars = " -\n";
        var count = 0
        var i = 0;
        var j = 0;
        while (i < text.length)
        {
            j = i;
            while (j < text.length)
            {
                if (splitbychars.contains(text[j]))
                {
                    count++;
                }
                //or j == text.length - 1 because it doesn't work properly
                //otherwise; i'm not sure exactly why. try it without it and you'll
                //see what I mean
                if (count == atatime || j == text.length - 1)
                {
                    //j + 1 = include the character we're splitting on in the output
                    //when it's a space, we don't need j + 1 because we don't need to
                    //show a space at the end of a line
                    chunks.push(text.substring(i, (text[j] == " ") ? j : j + 1));
                    count = 0;
                    i = j;
                    break;
                }
                j++;
            }
            i++;
        }
    }
    else if (units == "characters")
    {
        //this is so much simpler woohoo \(^o^)/
        for (var i = 0; i < text.length; i += atatime)
        {
            chunks.push(text.substring(i, i + atatime));
        }
    }
    
    Read(chunks, 0, speed);
}

function StopReading()
{
    if (typeof timeout1 !== undefined)
    {
        clearTimeout(timeout1);
    }
    if (typeof timeout2 !== undefined)
    {
        clearTimeout(timeout2);
    }
}

function Read(words, index, speed)
{
    if (index < words.length)
    {
        document.getElementById("output").innerHTML = words[index];
        timeout2 = setTimeout(function() { Read(words, index + 1, speed) }, speed);
    }
}

function UpdateAtATimeUnits()
{
    var units = document.getElementById("units").value;
    var atatime = document.getElementById("atatime").value;
    var atatimeunits = document.getElementById("atatimeunits");
    
    if (units == "words")
    {
        if (atatime == 1)
        {
            atatimeunits.innerHTML = "word";
        }
        else
        {
            atatimeunits.innerHTML = "words";
        }
    }
    else if (units == "characters")
    {
        if (atatime == 1)
        {
            atatimeunits.innerHTML = "character";
        }
        else
        {
            atatimeunits.innerHTML = "characters";
        }
    }
}