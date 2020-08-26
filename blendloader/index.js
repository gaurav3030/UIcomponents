


var r = 75;
document.querySelectorAll('.startcolor').forEach(function(button,i) {
    button.style.background = "rgba(0,0,255,"+(1-(i*0.1))+")";
    var tl = gsap.timeline({repeat:-1});
    tl.delay(0.05*i);

tl.to(button,{ duration: .5, ease: "sine.out",x:r})
tl.to(button,{ duration: .5, ease: "sine.in", y:r},"<")
tl.to(button,{ duration: .5, ease: "sine.in",x:0})
tl.to(button,{ duration: .5, ease: "sine.out", y:2*r},"<")
tl.to(button,{ duration: .5, ease: "sine.out",x:-1*r})
tl.to(button,{ duration: .5, ease: "sine.in", y:r},"<")
tl.to(button,{ duration: .5, ease: "sine.in",x:0})
tl.to(button,{ duration: .5, ease: "sine.out", y:0},"<")
});


// var tl = gsap.timeline({repeat:-1});

// tl.to(".startcolor",{ duration: .5, ease: "sine.out",x:r})
// tl.to(".startcolor",{ duration: .5, ease: "sine.in", y:r},"<")
// tl.to(".startcolor",{ duration: .5, ease: "sine.in",x:0})
// tl.to(".startcolor",{ duration: .5, ease: "sine.out", y:2*r},"<")
// tl.to(".startcolor",{ duration: .5, ease: "sine.out",x:-1*r})
// tl.to(".startcolor",{ duration: .5, ease: "sine.in", y:r},"<")
// tl.to(".startcolor",{ duration: .5, ease: "sine.in",x:0})
// tl.to(".startcolor",{ duration: .5, ease: "sine.out", y:0},"<")
