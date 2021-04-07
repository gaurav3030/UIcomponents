var btn = document.getElementById("btncontainer");
var btntext = document.getElementById("buttontext");
var form = document.getElementById("formcontainer");

var toggle = 0;
btn.style.transitionDuration = "0.4s";
btn.addEventListener("click",(e)=>{

    if(toggle===0  && e.target.id !== "closebtn"){
        btn.style.height = "120vh";
        btn.style.width = "150vw";
        btn.style.top = "-40vh";
        btntext.style.display = "none";
        form.style.display = "block";
        toggle=1;
        
    }
    if(toggle===1 && e.target.id === "btncontainer"){
        btn.style.height = "140px";
        btn.style.width = "200px";
        btn.style.top = "-70px";
        form.style.display = "none";
        btntext.style.display = "block";
        toggle=0;
        
    }
});

