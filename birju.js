// gsap.to("#page1 h1",{
//     transform:"translateY(195%)",
//     scale:1.5,
//     scrollTrigger:{
//         trigger:"page1",
//         scroller:"body",
//         scrub:2,
//         pin:true
//     }

// })

 gsap.to("#social a",{

     y:20,
     duration:0.5,
    repeat:-1,
    stagger:0.4,
          yoyo:true

 })
 gsap.to("#page2 i",{

    scale:1.3,
    duration:0.5,
    rotate:10,
   repeat:-1,
         yoyo:true

})
gsap.from("#page3 h1",{
    transform:"translateY(-180%)",
   opacity:1,
 duration:3,
 scale:0.8,
    scrollTrigger:{
         trigger:"page1",
        scroller:"body",
        scrub:2,
        
        pin:true
    }
 })

var project= document.querySelectorAll(".project")
project.forEach(function(details){

    
     details.addEventListener("mouseenter",function(){
         details.children[1].style.opacity=1;
     })

     details.addEventListener("mouseleave",function(){
        details.children[1].style.opacity=0;
     })

     details.addEventListener("mousemove",function(che){
        details.children[1].style.left=che.x+"px";
     })
      details.addEventListener("mousemove",function(che){
        var jj=che.y - details.getBoundingClientRect().top;
         details.children[1].style.top=jj+"px";
     })
    


})

