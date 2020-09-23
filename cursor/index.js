var toggle =document.getElementById("toggle");
window.addEventListener('mousemove', nutterbutter); 
var oldX = 0;
var oldY = 0;
function nutterbutter(e){ 
    
    console.log(e.pageX);
    var cursor =document.getElementById("cursor");
    
    var x = e.pageX;
    var y = e.pageY;
    var xdif = oldX -x;
    var ydif = oldY-y;
    let radianDegrees = Math.atan2(e.pageX - oldX, e.pageY - oldY);
    let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    var cursorx = (40* Math.sin(radianDegrees))+40;
    var cursory = (40* Math.cos(radianDegrees))+40;
    
        toggle.style.left = cursorx+"%";


        toggle.style.top = cursory+"%";

    

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    oldX = x;
    oldY = y;
	
} 
toggle.style.left = "50%";
toggle.style.top = "50%";