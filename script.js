gsap.to(".part3 .part3_cont .pt3cont ",{
    // transform:"translateY(60%)",
    y:300,
    scrollTrigger:{
        trigger:".part3 .pt3cont",
        scroller:"body",
        start:"top 60%",
        end:"bottom -120%",
        markers:true,
        scrub:1,
    }
})
// gsap.to(".section4  .part3_cont .pt3cont ",{
//     // transform:"translateY(20%)",
//     // y:-100,
//     scrollTrigger:{
//         trigger:".section4 .part3 ",
//         scroller:"body",
//         start:"top 50%",
//         markers:true,
//         // end:"bottom -100%",
//         scrub:2,
//     }
// })

gsap.to(".section2 span",{
    color:"rgba(21, 30, 63, 0.74)",
    stagger:4 ,
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 60%",
        end:"bottom 90%",
        scrub:.2,
    }
})

gsap.to(".ban_img",{
    y:210,
    scrollTrigger:{
        trigger:".ban_img",
        scroller:"body",
        scrub:1,
        start:"top 80%",            
        end:"bottom 60%",  
        // markers:true,

    }
})