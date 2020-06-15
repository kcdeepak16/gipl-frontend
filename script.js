function sidebar_clicked(clicked_id)
{
    for(var i = 1;i<=5;i++)
    {
        var def = "sbb_" + i;           
        document.getElementById(def).style.fontSize = "1rem";
    }
    document.getElementById(clicked_id).style.fontSize = "1.5rem";
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
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hardwork", "integrity", "quality"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});