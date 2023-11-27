// locomotive function here
if (window.innerWidth > 1580) {
function loco() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main-container"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main-container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
loco()
};

//sticky header gsap 
if (window.innerWidth > 1580) {
    gsap.to(".collector-top-section>.top-section", {
        scrollTrigger: {
            trigger: 'header',
            start: '5% top',
            end: 'bottom top',
            scroller: '#main-container',
            onEnter: () => {
                document.querySelector('.top-section').classList.add('scrolledtop');
            },
            onLeaveBack: () => {
                document.querySelector('.top-section').classList.remove('scrolledtop');
            },
        },
    });

    gsap.to(".collector-top-section>.top-section", {
        scrollTrigger: {
            trigger: '#section-5', 
            start: 'bottom top',
            end: '+=100',
            scroller: '#main-container',
            onEnter: () => {
                document.querySelector('.top-section').classList.add('scrolled');
            },
            onLeaveBack: () => {
                document.querySelector('.top-section').classList.remove('scrolled');
            },
        },
    });

    gsap.to(".apple-vision-logo a", {
        scrollTrigger: {
            trigger: '#section-5', 
            start: 'bottom top',
            end: '+=100',
            scroller: '#main-container',
            onEnter: () => {
                document.querySelector('.apple-vision-logo a').classList.add('ChangeColor');
            },
            onLeaveBack: () => {
                document.querySelector('.apple-vision-logo a').classList.remove('ChangeColor');
            },
        },
    });

    gsap.to(".notify-btn", {
        scrollTrigger: {
            trigger: '#section-5', 
            start: 'bottom top',
            end: '+=100',
            scroller: '#main-container',
            onEnter: () => {
                document.querySelector('.notify-btn').classList.add('ChangeColorbtn');
            },
            onLeaveBack: () => {
                document.querySelector('.notify-btn').classList.remove('ChangeColorbtn');
            },
        },
    });
};

// header video & more content
if (window.innerWidth > 1580) {
    gsap.to("#video-main", {
        scrollTrigger: {
            trigger: `#video-main`,
            start: "5% top",
            end: "bottom top",
            scroller: "#main-container",
            onEnter: () => {
                document.querySelector("#video-main").play();
            },
        },
    });

    gsap.to("header", {
        scrollTrigger: {
            trigger: `header`,
            start: "top top",
            end: "bottom top",
            scroller: "#main-container",
            pin: true,
        },
    });

    gsap.to("header>#bottom-section>img", {
        scrollTrigger: {
            trigger: `header>#bottom-section>img`,
            start: "0% top",
            end: "bottom top",
            scroller: "#main-container",
            scrub: 1,
        },
        opacity: 1,
        y: "5%",
        duration: 1,
    });

    gsap.to("header>#bottom-section", {
        scrollTrigger: {
            trigger: `header>#bottom-section`,
            start: "10% top",
            end: "bottom",
            scroller: "#main-container",
            scrub: 1,
        },
        opacity: 0,
        duration: 1,
    });
};

//main-top-four-sections-container contain all animation here
if (window.innerWidth > 1580) {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#main-top-four-sections-container",
            start: "top top",
            endtrigger: "#section-4",
            end: "bottom top",
            scroller: "#main-container",
            scrub: 0.5,
            pinSpacing: false,
            pin: true,
            onEnter: () => {
                console.log("Entering trigger");
                gsap.to("#main-top-four-sections-container", { height: "600vh" });
            },
            onLeave: () => {
                console.log("Leaving trigger");
                gsap.to("#main-top-four-sections-container", { height: "100vh" });
            },
            onEnterBack: () => {
                console.log("Re-entering trigger");
                gsap.to("#main-top-four-sections-container", { height: "600vh" });
            },
            onLeaveBack: () => {
                console.log("Leaving trigger");
                gsap.to("#main-top-four-sections-container", { height: "100vh" });
            },
        }
    });

    var overlay = document.querySelector('.overlay-shadow');
    tl1.to("#section-1", { opacity: 1 })
        .to("#section-1 .con_head-cont_loscow", { bottom: "100%", duration: 10, delay: 1.5, ease: "power2.inOut" })
        .to(overlay, { opacity: 1, duration: 1, delay: -6, ease: "power2.inOut" })
        .to("#section-2", { opacity: 1, duration: 1, delay: -0.5, ease: "power2.inOut" })
        .to("#section-2 .con_head-cont_loscow", { bottom: "100%", duration: 10, delay: 1.5, ease: "power2.inOut" })
        .to(overlay, { opacity: 0, duration: 1, delay: -6, ease: "power2.inOut" })
        // .to("#section-1", { opacity: 0, duration: 1, delay: -0.5, ease: "power2.inOut" })
        .to("#section-3", { opacity: 1, duration: 1, delay: -0.5, ease: "power2.inOut" })
        .to("#section-3 .con_head-cont_loscow", { bottom: "100%", duration: 10, delay: 1.5, ease: "power2.inOut" })
        .to(overlay, { opacity: 1, duration: 1, delay: -6, ease: "power2.inOut" })
        // .to("#section-2", { opacity: 0, duration: 1, delay: -0.5, ease: "power2.inOut" })
        .to("#section-4", { opacity: 1, duration: 1, delay: -0.5, ease: "power2.inOut" })
        .to("#section-4 .con_head-cont_loscow", { bottom: "100%", duration: 10, delay: 1.5, ease: "power2.inOut" })
        .to(overlay, { opacity: 0, duration: 1, delay: -6, ease: "power2.inOut" });
};

//section-6 text plus video trigger
if (window.innerWidth > 1580) {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-6',
            start: 'top top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl2.to('#section-6 .con_head-cont_loscow', {
        top: "-20%",
        duration: 1,
        ease: 'none'
    });

    tl2.to('#section-6 .video-wrapper', {
        width: "95%",
        duration: 1,
        delay: 0.5,
        ease: 'none'
    });
};

//section-7 text plus video trigger
if (window.innerWidth > 1580) {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-7',
            start: 'top top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl3.to('#section-7 .con_head-cont_loscow', {
        top: "-20%",
        duration: 1,
        ease: 'none'
    });

    tl3.to('#section-7 .video-wrapper', {
        width: "95%",
        duration: 1,
        delay: 0.5,
        ease: 'none'
    });
};

//section-8 text plus video trigger
if (window.innerWidth > 1580) {
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-8',
            start: 'top top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl4.to('#section-8 .con_head-cont_loscow', {
        top: "-20%",
        duration: 1,
        ease: 'none'
    });

    tl4.to('#section-8 .video-wrapper', {
        width: "95%",
        duration: 1,
        delay: 0.5,
        ease: 'none'
    });
};

//section-9 text plus video trigger
if (window.innerWidth > 1580) {
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-9',
            start: 'top top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl5.to('#section-9 .con_head-cont_loscow', {
        top: "-20%",
        duration: 1,
        ease: 'none'
    });

    tl5.to('#section-9 .video-wrapper', {
        width: "95%",
        duration: 1,
        delay: 0.5,
        ease: 'none'
    });
};

// section-22 image one 
if (window.innerWidth > 1580) {
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-22 .image-wrapper.one',
            start: '80% top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl6.to('#section-22 #turnOn', {
        opacity: "0",
        duration: 1,
        ease: 'none'
    });
};

// section-22 image two 
if (window.innerWidth > 1580) {
    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-22 .image-wrapper.two',
            start: '80% top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl7.to('#section-22 #turnOn1', {
        opacity: "0",
        duration: 1,
        ease: 'none'
    });
};

// section-22 image three 
if (window.innerWidth > 1580) {
    let tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-22 .image-wrapper.three',
            start: '60% top',
            pin: true,
            scroller: `#main-container`,
            scrub: 1
        },
    });

    tl8.to('#section-22 .image-wrapper.three>img', {
        scale: 1.3,
        duration: 1,
        ease: 'none'
    });
};

//section-20 canvas 
if (window.innerWidth > 1580) {
    function canvas() {
        const canvas = document.querySelector("#section-canvas canvas");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        });

        function files(index) {
            var data = `
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0000.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0001.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0002.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0003.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0004.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0005.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0006.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0007.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0008.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0009.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0010.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0011.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0012.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0013.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0014.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0015.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0016.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0017.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0018.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0019.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0020.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0021.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0022.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0023.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0024.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0025.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0026.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0027.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0028.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0029.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0030.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0031.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0032.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0033.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0034.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0035.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0036.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0037.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0038.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0039.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0040.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0041.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0042.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0043.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0044.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0045.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0046.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0047.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0048.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0049.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0050.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0051.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0052.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0053.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0054.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0055.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0056.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0057.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0058.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0059.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0060.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0061.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0062.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0063.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0064.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0065.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0066.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0067.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0068.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0069.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0070.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0071.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0072.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0073.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0074.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0075.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0076.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0077.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0078.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0079.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0080.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0081.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0082.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0083.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0084.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0085.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0086.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0087.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0088.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0089.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0090.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0091.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0092.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0093.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0094.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0095.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0096.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0097.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0098.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0099.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0100.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0101.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0102.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0103.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0104.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0105.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0106.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0107.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0108.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0109.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0110.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0111.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0112.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0113.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0114.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0115.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0116.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0117.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0118.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0119.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0120.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0121.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0122.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0123.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0124.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0125.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0126.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0127.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0128.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0129.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0130.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0131.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0132.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0133.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0134.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0135.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0136.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0137.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0138.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0139.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0140.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0141.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0142.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0143.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0144.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0145.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0146.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0147.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0148.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0149.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0150.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0151.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0153.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0154.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0155.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0156.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0157.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0158.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0159.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0160.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0161.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0162.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0163.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0164.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0165.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0166.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0167.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0168.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0169.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0170.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0171.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0172.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0173.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0174.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0175.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0176.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0177.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0178.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0179.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0180.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0181.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0182.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0183.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0184.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0185.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0186.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0187.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0188.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0189.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0190.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0191.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0192.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0193.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0194.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0195.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0196.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0197.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0198.jpg
          https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0199.jpg
         `;
            return data.split("\n")[index];
        }

        const frameCount = 198;

        const images = [];
        const imageSeq = {
            frame: 1,
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }

        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                scrub: 0.15,
                trigger: `#section-canvas canvas`,
                start: `top top`,
                end: `500% top`,
                pinSpacing: false,

                scroller: `#main-container`,
            },
            onUpdate: render,
        });

        images[1].onload = render;

        function render() {
            scaleImage(images[imageSeq.frame], context);
        }

        function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.min(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        }
        ScrollTrigger.create({
            trigger: "#section-canvas canvas",
            pin: true,
            pinSpacing: false,
            scroller: `#main-container`,
            start: `top top`,
            end: `500% top`,
        });
    }
    canvas();
};

//section-22 canvas 
if (window.innerWidth > 1580) {
    function canvas1() {
        const canvas = document.querySelector("#section-22 canvas");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        });

        function files(index) {
            var data = `
    assets/images/Apple-vision-canva-images/Vision00001.png
    assets/images/Apple-vision-canva-images/Vision00002.png
    assets/images/Apple-vision-canva-images/Vision00003.png
    assets/images/Apple-vision-canva-images/Vision00004.png
    assets/images/Apple-vision-canva-images/Vision00005.png
    assets/images/Apple-vision-canva-images/Vision00006.png
    assets/images/Apple-vision-canva-images/Vision00007.png
    assets/images/Apple-vision-canva-images/Vision00008.png
    assets/images/Apple-vision-canva-images/Vision00009.png
    assets/images/Apple-vision-canva-images/Vision00010.png
    assets/images/Apple-vision-canva-images/Vision00011.png
    assets/images/Apple-vision-canva-images/Vision00012.png
    assets/images/Apple-vision-canva-images/Vision00013.png
    assets/images/Apple-vision-canva-images/Vision00014.png
    assets/images/Apple-vision-canva-images/Vision00015.png
    assets/images/Apple-vision-canva-images/Vision00016.png
    assets/images/Apple-vision-canva-images/Vision00017.png
    assets/images/Apple-vision-canva-images/Vision00018.png
    assets/images/Apple-vision-canva-images/Vision00019.png
    assets/images/Apple-vision-canva-images/Vision00020.png
    assets/images/Apple-vision-canva-images/Vision00021.png
    assets/images/Apple-vision-canva-images/Vision00022.png
    assets/images/Apple-vision-canva-images/Vision00023.png
    assets/images/Apple-vision-canva-images/Vision00024.png
    assets/images/Apple-vision-canva-images/Vision00025.png
    `;
            return data.split("\n")[index];
        }

        const frameCount = 25;

        const images = [];
        const imageSeq = {
            frame: 1,
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }

        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                scrub: 0.15,
                trigger: `#section-22 canvas`,
                start: `top top`,
                end: `bottom top`,
                scroller: `#main-container`,
            },
            onUpdate: render,
        });

        images[1].onload = render;

        function render() {
            scaleImage(images[imageSeq.frame], context);
        }

        function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        }
        ScrollTrigger.create({
            trigger: "#section-22 canvas",
            pin: true,
            scroller: `#main-container`,
            start: `top top`,
            end: `bottom top`,
        });
    }
    canvas1();
};

// apple lock animation
if (window.innerWidth > 1580) {
    gsap.timeline({
        scrollTrigger: {
            trigger: `#section-23`,
            start: `top center+=100`,
            end: `bottom center`,
            pin: false,
            scrub: false,
            scroller: `#main-container `,
            once: true,
            onEnter: () => {
                console.log('ScrollTrigger Entered!');
            },
            onLeave: () => {
                console.log('ScrollTrigger Left!');
            },
        },
        onComplete: () => {
            console.log('Animation Completed!');
            document.querySelector(".icon-security").classList.add('animate');
        }
    });
};