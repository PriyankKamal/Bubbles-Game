let tl = gsap.timeline();


tl.from(".panel-part-1 .elem",{
    y:-50,
    stagger:0.2,
    duration : 1,
    delay:0.2, 
    opacity:0,
})

tl.from(".panel-bottom .bubble",{
    opacity:0,
    stagger:0.03,
    duration:0.2,
    delay:0.1,
})




