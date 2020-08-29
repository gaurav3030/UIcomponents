
tabs =document.querySelectorAll(".tab");
activeTab = 0;


        



tabs.forEach((tab,index) => {
    tab.addEventListener("click",()=>{
        console.log(index);
        var d=0,half;
        
        d= 75*index;
        const timeline = anime.timeline();
        timeline.add({
            
            targets: ".container svg",
            translateX: 70*activeTab,
            scale: 0,
            duration : 200,
            
             
        })
        .add({
            targets: ".container svg",
            translateX: d,
            duration : 100, 
            easing :"linear"
        })
        .add({
            targets: ".container svg",
            scale: 1,
            duration : 200 
        });
       
        timeline.play();
        tabs[activeTab].classList.remove("active");
        tab.classList.add("active")
        
        
        activeTab =index;
        console.log("active "+index);
    });
    
});