var state = 0;
document.querySelector("button").addEventListener("click",()=>{
    if(state===0){
        document.querySelector(".searchtext").classList.add("searchexpand");
        document.querySelector("span").classList.add("searchcross");
        document.querySelector(".searchcircle").classList.add("fill");
        state=1;
    }else{
        document.querySelector(".searchtext").value="";
        document.querySelector(".searchtext").classList.remove("searchexpand");
        document.querySelector("span").classList.remove("searchcross");
        document.querySelector(".searchcircle").classList.remove("fill");
        state=0;
    }
});