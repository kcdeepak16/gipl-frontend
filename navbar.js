function sidebar_clicked(clicked_id)
{
    for(var i = 1;i<=5;i++)
    {
        var def = "sbb_" + i;           
        document.getElementById(def).style.fontSize = "1rem";
        document.getElementById(def).style.margin = "auto 3px";
    }
    document.getElementById(clicked_id).style.fontSize = "1.5rem";
    document.getElementById(clicked_id).style.margin = "0";
    document.getElementById(clicked_id).style.outline = "none";
    
}

document.getElementById("sidebar_button").addEventListener("click",function(){
    var dis = window.getComputedStyle(document.getElementById("sidebar_open")).getPropertyValue('display');
    if (dis == "none")
    {
        document.getElementById("sidebar_open").style.display = "block";
    }
    else
    {
        document.getElementById("sidebar_open").style.display = "none";
    }
});