var menustate =0;

document.querySelector(".menu").addEventListener("click",()=>{
    if(menustate===0){
        document.querySelector(".bar1").style.width="5%";
        document.querySelector(".bar3").style.width="5%";
        document.querySelector(".bar2").style.width="5%";
        document.querySelector(".bar2").style.left="47.5%";
        setTimeout(() => {
            document.querySelector(".bar1").style.transform="rotateZ(45deg)";
            document.querySelector(".bar3").style.transform="rotateZ(45deg)";
            document.querySelector(".bar2").style.transform="rotateZ(135deg)";
            setTimeout(() => {
                document.querySelector(".bar3").style.top="50%";
                document.querySelector(".bar1").style.top="50%";
                document.querySelector(".bar1").style.width="100%";
                document.querySelector(".bar3").style.width="100%";
                document.querySelector(".bar2").style.left="0px";
                document.querySelector(".bar2").style.width="100%";
            }, 100);
    
        }, 200);
        menustate=1;

    }else{
        document.querySelector(".bar1").style.top="0%";
        document.querySelector(".bar3").style.top="100px";
        document.querySelector(".bar1").style.width="5%";
        document.querySelector(".bar3").style.width="5%";
        document.querySelector(".bar2").style.left="47.5%";
        document.querySelector(".bar2").style.width="5%";
        setTimeout(() => {
            document.querySelector(".bar1").style.transform="rotateZ(0deg)";
            document.querySelector(".bar3").style.transform="rotateZ(0deg)";
            document.querySelector(".bar2").style.transform="rotateZ(0deg)";
            setTimeout(() => {
                document.querySelector(".bar1").style.width="100%";
                document.querySelector(".bar3").style.width="100%";
                document.querySelector(".bar2").style.width="100%";
                document.querySelector(".bar2").style.left="0%";
            }, 100);
    
        }, 200);
        menustate=0;
    }

    



});