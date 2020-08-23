


document.querySelectorAll(".checkbox").forEach(item =>{
    item.addEventListener("click",()=>{
        item.classList.add("checkeddisplay");
        function checked(){
            item.classList.add("checked");
        }
        setTimeout(checked, 150);
        function remove(){
            item.parentElement.style.left = "50vw";
        }
        setTimeout(remove, 300);
        function fade(){
            item.parentElement.style.display = "none";
        }
        setTimeout(fade, 400);
        
        
    });
});





