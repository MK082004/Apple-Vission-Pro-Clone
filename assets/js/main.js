const html = document.documentElement;
// sticky navbar logics here
if (window.innerWidth <= 1580) {
    document.addEventListener("DOMContentLoaded", function () {
        const topSection = document.querySelector('.top-section');
        const scrollThreshold = 0.05 * window.innerHeight;
        const AppleVisionLogo = document.querySelector('.apple-vision-logo a');
        const NotifyBtn = document.querySelector('.notify-btn');

        window.addEventListener('scroll', function () {
            if (window.scrollY > scrollThreshold) {
                topSection.classList.add('scrolledtop');
            }

            else {
                topSection.classList.remove('scrolledtop');
            }
        });

        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > header.offsetTop + header.offsetHeight) {
                topSection.classList.add('scrolled');
                AppleVisionLogo.classList.add('ChangeColor');
                NotifyBtn.classList.add('ChangeColorbtn');
            }

            else {
                topSection.classList.remove('scrolled');
                AppleVisionLogo.classList.remove('ChangeColor');
                NotifyBtn.classList.remove('ChangeColorbtn');
            }
        });
    });
};

// sticky navbar tranfer logics here
document.addEventListener("DOMContentLoaded", function () {
    function moveTopSection() {
        var screenWidth = window.innerWidth;
        var topSection = document.querySelector('.top-section');
        var collectorTopSection = document.querySelector('.collector-top-section');
        var mainContainer = document.querySelector('header');

        if (screenWidth > 1580) {
            if (topSection && collectorTopSection) {
                collectorTopSection.appendChild(topSection);
            }
        } else {
            if (topSection && mainContainer) {
                mainContainer.insertBefore(topSection, mainContainer.firstChild);
            }
        }
    }

    window.addEventListener('load', moveTopSection);
    window.addEventListener('resize', moveTopSection);
});

//notify all funtions here
document.addEventListener("DOMContentLoaded", function () {
    const NotifyBtn = document.querySelector('.notify-btn');
    const NotifyOverlay = document.querySelector('.notify-overlay');
    const CloseNotifyWrap = document.getElementById('close-notify-wrap');
    const CardSection = document.querySelector('.card-section');
    const EmailInput = document.getElementById('email-input');
    const EmailLabel = document.getElementById('email-label');
    const SubmitNotify = document.getElementById('submit-notify');
    const ErrorSpanMain = document.querySelector('.form-textbox p');
    const ErrorSpan = document.querySelector('.form-textbox span');
    const FormTextbox = document.querySelector('.form-textbox');
    const messageios = document.getElementById('message_ios');
    const NotifyForm = document.getElementById('notify-form');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    SubmitNotify.addEventListener('click', function (event) {
        event.preventDefault();
        validateEmail();
        toggleActiveClass();
    });

    EmailInput.addEventListener('input', function () {
        clearError();
        toggleActiveClass();
    });

    EmailInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            validateEmail();
            toggleActiveClass();
        }
    });

    NotifyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateEmail();
    });

    function validateEmail() {
        if (EmailInput.value.trim() === '') {
            displayError('Please enter an email address.');
            EmailLabel.classList.remove('active');
        } else {
            if (!emailPattern.test(EmailInput.value)) {
                displayError('Please enter a valid email address.');
                EmailLabel.classList.remove('active');
            } else {
                clearError();
                toggleActiveClass();
                submitForm();
            }
        }
    }

    function displayError(errorMessage) {
        ErrorSpanMain.style.display = 'flex';
        ErrorSpan.innerHTML = errorMessage;
        EmailLabel.style.color = '#E50000';
    }

    function clearError() {
        ErrorSpanMain.style.display = 'none';
        ErrorSpan.innerHTML = '';
        EmailLabel.style.color = 'black';
    }

    function toggleActiveClass() {
        if (EmailInput.value.trim() !== '') {
            EmailLabel.classList.add('active');
        } else {
            EmailLabel.classList.remove('active');
        }
    }

    function submitForm() {
        SubmitNotify.classList.add('active');
        const randomDelay = Math.random() * (10 - 2) + 2;
        setTimeout(function () {
            FormTextbox.style.display = 'none';
            SubmitNotify.classList.remove('active');
            CardSection.classList.add('active');
            NotifyForm.reset();
            toggleActiveClass();
            messageios.innerHTML = 'Thank you. We’ll contact you with updates about Apple Vision Pro.';
        }, randomDelay * 1000);
    }

    NotifyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        html.classList.add('overflow-hidden');
        CardSection.classList.remove('fadeup-animation');
        NotifyOverlay.classList.add('active');
    });

    function removeOverlay() {
        FormTextbox.style.display = 'block';
        messageios.innerHTML = 'Get updates on Apple Vision Pro, including news about availability.';
        NotifyForm.reset();
        clearError();
        toggleActiveClass();
        NotifyOverlay.classList.remove('active');
    }

    CloseNotifyWrap.addEventListener('click', (e) => {
        e.preventDefault();
        CardSection.classList.add('fadeup-animation');
        setTimeout(removeOverlay, 100);
    });

    NotifyOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        html.classList.remove('overflow-hidden');
        if (!CardSection.contains(e.target)) {
            CardSection.classList.add('fadeup-animation');
            setTimeout(removeOverlay, 100);
        }
    });
});

// drawler slider js here
document.addEventListener('DOMContentLoaded', function () {
    function createSlider(sliderContainer) {
        const prevButton = sliderContainer.querySelector('.prev-button');
        const nextButton = sliderContainer.querySelector('.next-button');
        const sliderTrack = sliderContainer.querySelector('.slider-track');
        const sliderItems = sliderContainer.querySelectorAll('.slider-item');
        const closeButton = sliderContainer.querySelector('.left-side button');
        const slideCount = sliderItems.length;
        let currentIndex = 0;
        sliderItems[0].classList.add('active');
        nextButton.addEventListener('click', () => {
            if (currentIndex < slideCount - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        sliderItems.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                const clickedElement = event.target;
                if (clickedElement.tagName === 'IMG' || clickedElement.tagName === 'VIDEO') {
                    currentIndex = index;
                    updateSlider();
                }
            });
        });

        function updateSlider() {
            let translateValue = 0;

            if (window.innerWidth <= 767) {
                translateValue = -currentIndex * 300;
            } else {
                for (let i = 0; i < currentIndex; i++) {
                    translateValue -= sliderItems[i].clientWidth;
                }
            }

            sliderTrack.style.transform = `translateX(${translateValue}px)`;

            sliderItems.forEach((item, index) => {
                item.classList.remove('active');
                if (index === currentIndex) {
                    item.classList.add('active');
                    playPauseVideo(item, true); 
                }
                else {
                    playPauseVideo(item, false); 
                }
            });

            updateButtonState();
        }

        function playPauseVideo(slide, play) {
            const video = slide.querySelector('.video-wrapper video');
            const playIcon = slide.querySelector(".play-icon");
            const pauseIcon = slide.querySelector(".pause-icon");
        
            if (video) {
                if (play) {
                    video.play();
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "block";
                } else {
                    video.pause();
                    video.currentTime = 0; 
                    playIcon.style.display = "block";
                    pauseIcon.style.display = "none";
                }
            }
        }        

        function updateButtonState() {
            if (currentIndex === 0) {
                prevButton.disabled = true;
            } else {
                prevButton.disabled = false;
            }

            if (currentIndex === sliderItems.length - 1) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
        }

        let touchStartX = 0;
        let touchEndX = 0;

        sliderTrack.addEventListener('touchstart', function (event) {
            touchStartX = event.touches[0].clientX;
        });

        sliderTrack.addEventListener('touchmove', function (event) {
            touchEndX = event.touches[0].clientX;
        });

        sliderTrack.addEventListener('touchend', function () {
            const touchDiff = touchStartX - touchEndX;

            if (window.innerWidth <= 767) {
                if (touchDiff > 0 && currentIndex < slideCount - 1) {
                    currentIndex++;
                    updateSlider();
                } else if (touchDiff < 0 && currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            }

            touchStartX = 0;
            touchEndX = 0;
        });

        closeButton.addEventListener('click', () => {
            updateSlider();
            setTimeout(() => {
                currentIndex = 0;
                updateSlider();
            }, 2000);
        });

        updateButtonState();
    }
    const sliderContainers = document.querySelectorAll('.button-slider-container');
    sliderContainers.forEach(sliderContainer => {
        createSlider(sliderContainer);
    });
});

// drawler slider open and close logics her
document.addEventListener('DOMContentLoaded', function () {
    const drawlerOpens = document.querySelectorAll('.drawler-open');

    function smoothScrollTo(targetPosition, duration) {
        var startPosition = window.scrollY || window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scrollStep() {
            var currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            var elapsed = currentTime - startTime;
            var position = easeInOutQuad(elapsed, startPosition, targetPosition - startPosition, duration);
            window.scrollTo(0, position);
            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollStep);
    }

    drawlerOpens.forEach((drawlerOpen, index) => {
        const section = drawlerOpen.closest('section');
        const sliderContainer = section.querySelector('.button-slider');
        const closeButton = sliderContainer.querySelector('.left-side button');

        drawlerOpen.addEventListener("click", function () {
            if (sliderContainer.style.maxHeight) {
                sliderContainer.style.maxHeight = null;
                drawlerOpen.removeAttribute("disabled");
            } else {
                sliderContainer.style.maxHeight = sliderContainer.scrollHeight + "px";
                drawlerOpen.setAttribute("disabled", "true");

                var rect = sliderContainer.getBoundingClientRect();

                if ('scrollTo' in document.body) {
                    smoothScrollTo(rect.top + window.scrollY, 800); 
                } else {
                    window.scroll(0, rect.bottom + window.scrollY);
                }
            }
        });

        closeButton.addEventListener("click", function () {
            const drawlerOpensRect = drawlerOpen.getBoundingClientRect();
            const targetPosition = drawlerOpensRect.top + window.scrollY - window.innerHeight * 0.5;
            smoothScrollTo(targetPosition, 800);

            sliderContainer.style.maxHeight = null;
            setTimeout(() => {
                drawlerOpen.removeAttribute("disabled");
            }, 800);
        });
    });
});

// video play and pause logic
document.addEventListener("DOMContentLoaded", function () {
    var playPauseButtons = document.querySelectorAll(".play-pause-button");

    playPauseButtons.forEach(function (button) {
        var videoContainer = button.closest(".video-wrapper");
        var video = videoContainer ? videoContainer.querySelector("video") : null;
        var mainplayprogresscircle = button.parentElement.querySelector(".play-progress-circle");
        var progressCircle = button.parentElement.querySelector(".progress-circle");
        var playIcon = button.querySelector(".play-icon");
        var pauseIcon = button.querySelector(".pause-icon");
        var spinner = button.parentElement.querySelector(".lds-spinner-2");

        if (video) {
            button.style.display = "none";
            mainplayprogresscircle.style.display = "none";

            video.addEventListener("loadeddata", function () {
                spinner.style.display = "none";
                button.style.display = "flex";
                mainplayprogresscircle.style.display = "block";
            });

            button.addEventListener("click", function () {
                if (video.paused) {
                    video.play();
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "block";
                } else {
                    video.pause();
                    playIcon.style.display = "block";
                    pauseIcon.style.display = "none";
                }
            });

            video.addEventListener("timeupdate", function () {
                var videoDuration = video.duration;
                var progress = (video.currentTime / videoDuration) * 100;
                var dashoffset = 283 - (283 * progress) / 100;
                progressCircle.style.strokeDashoffset = dashoffset;
            });

            // Intersection Observer to play the video when it enters the viewport
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        video.currentTime = 0;
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            });

            observer.observe(videoContainer);
        }
    });
});

// quick view slider here
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-tracker');
    const sliderBtnsContainer = document.querySelector('.slider-btn');
    const sliderBtns = document.querySelectorAll('.slider-btn button');
    const slides = document.querySelectorAll('.slides');
    const sliderContent = document.getElementById('slider-content');
    const quickviewBTN = document.getElementById('open-quick-view');
    const quickviewSection = document.getElementById('quickview-section');
    const closeQuickviewBTN = document.getElementById('close-quickview');
    let currentIndex = 0;
    document.querySelector('.prev-btn').disabled = true;
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchmove', function (e) {
        touchEndX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchend', function () {
        handleSwipe();
    });

    sliderBtnsContainer.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    sliderBtnsContainer.addEventListener('touchmove', function (e) {
        touchEndX = e.touches[0].clientX;
    });

    sliderBtnsContainer.addEventListener('touchend', function () {
        handleSwipe2();
    });

 
    function handleSwipe() {
        const threshold = 50;

        if (touchStartX - touchEndX > threshold) {
            if (currentIndex < sliderBtns.length - 1) {
                currentIndex++;
            }
        } else if (touchEndX - touchStartX > threshold) {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        scrollToCurrentIndex();
    }

    function scrollToCurrentIndex() {
        const slideWidth = sliderContainer.clientWidth;
        const scrollPosition = currentIndex * slideWidth;
        
        sliderContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateSlider();
        updateSliderContent();
        slideToCurrentIndex();
    }

    function handleSwipe2() {
        const threshold = 50; 

        if (touchStartX - touchEndX > threshold) {
            if (currentIndex < sliderBtns.length - 1) {
                currentIndex++;
                slideToCurrentIndex();
            }
        } else if (touchEndX - touchStartX > threshold) {
            if (currentIndex > 0) {
                currentIndex--;
                slideToCurrentIndex();
            }
        }
    }

    sliderBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            updateSliderContent();
            slideToCurrentIndex();
        });
    });

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            updateSliderContent();
            slideToCurrentIndex();
        });
    });

    function updateSlider() {
        let translateValue = 0;
        for (let i = 0; i < currentIndex; i++) {
            translateValue -= slides[i].clientWidth;
        }
        sliderContainer.style.transform = `translateX(${translateValue}px)`;
        slides.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    function updateSliderContent() {
        const slides = document.querySelectorAll('.slider-btn li');
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
        });
        slides[currentIndex].classList.add('active');

        const contentArray = [
            "A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that gently curves to wrap around your face.",
            "An array of advanced cameras and sensors work together to let you see the world clearly, understand your environment, and detect hand input.",
            "Speakers are positioned close to your ears, delivering rich Spatial Audio that seamlessly blends with real-world sounds.",
            "The Head Band provides cushioning, breathability, and stretch. The Fit Dial lets you adjust Apple Vision Pro precisely to your head.",
            "A pair of custom micro‑OLED displays deliver more pixels than a 4K TV to each eye — for stunning clarity.",
            "The Light Seal gently conforms to your face, delivering a precise fit while blocking out stray light.",
            "Press the Digital Crown to bring up the Home View, and turn it to control your level of immersion while using Environments.",
            "Press the top button to take spatial videos and spatial photos in the moment.",
            "The external battery supports up to 2 hours of use, and all‑day use when plugged in.1"
        ];

        sliderContent.style.opacity = 0;
        setTimeout(() => {
            sliderContent.innerHTML = contentArray[currentIndex];
            sliderContent.style.opacity = 1;
        }, 300);
    }

    function slideToCurrentIndex() {
        let translateValue = 0;
        for (let i = 0; i < currentIndex; i++) {
            translateValue -= sliderBtns[i].offsetWidth;
        }
        sliderBtnsContainer.style.transform = `translateX(${translateValue}px)`;
        document.querySelector('.prev-btn').disabled = currentIndex === 0;
        document.querySelector('.next-btn').disabled = currentIndex === sliderBtns.length - 1;
    }

    document.querySelector('.prev-btn').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            slideToCurrentIndex();
        }
    });

    document.querySelector('.next-btn').addEventListener('click', function () {
        if (currentIndex < sliderBtns.length - 1) {
            currentIndex++;
            slideToCurrentIndex();
        }
    });

    quickviewBTN.addEventListener('click', (e) => {
        e.preventDefault();
        html.classList.add('overflow-hidden');
        quickviewSection.classList.add('active');
    });

    closeQuickviewBTN.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlider();
        updateSliderContent();
        slideToCurrentIndex();
        html.classList.remove('overflow-hidden');
        quickviewSection.classList.add('fadeup-animation');
        setTimeout(() => {
            currentIndex = 0;
            updateSlider();
            updateSliderContent();
            slideToCurrentIndex();
            quickviewSection.classList.remove('active', 'fadeup-animation');
        }, 300);
    });

    updateSlider();
    updateSliderContent();
    slideToCurrentIndex();
});

// quick view video open close here
document.addEventListener('DOMContentLoaded', function () {
    const QuickviewSectionVideo = document.getElementById('quickview-section-video');
    const CloseQuickviewSectionVideo = document.getElementById('close-quickview-section-video');
    const OpenQuickviewSectionVideo = document.getElementById('open-quickview-section-video');
    const QuickviewWrapperVideo = document.getElementById('quickview-wrapper-video');
    const VideoElement = QuickviewWrapperVideo.querySelector('#quickview-wrapper-video video');

    OpenQuickviewSectionVideo.addEventListener('click', (e) => {
        e.preventDefault();
        QuickviewSectionVideo.classList.add('active');
        VideoElement.style.display = 'block';
        html.classList.add('overflow-hidden');
        setTimeout(() => {
            QuickviewWrapperVideo.classList.add('fadein-animation');
            VideoElement.muted = false;
            VideoElement.play();
        }, 500);
    });

    CloseQuickviewSectionVideo.addEventListener('click', (e) => {
        e.preventDefault();
        QuickviewWrapperVideo.classList.remove('fadein-animation');
        QuickviewWrapperVideo.classList.add('fadeup-animation');
        VideoElement.muted = true;
        VideoElement.pause();
        VideoElement.currentTime = 0;
        VideoElement.style.display = 'none';
        html.classList.remove('overflow-hidden');
        setTimeout(() => {
            QuickviewSectionVideo.classList.remove('active');
            QuickviewWrapperVideo.classList.remove('fadeup-animation');
        }, 200);
    });
});

// footer collapse open mobile screen 
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 876) {
        const footercollapses = document.querySelectorAll(".footer-collapse");
        footercollapses.forEach(function (footercollapse) {
            footercollapse.addEventListener("click", function () {
                const isActive = this.classList.contains('active');
                this.classList.toggle('active', !isActive);
                const icon = this.querySelector('.footer-collapse-icon');
                icon.classList.toggle('rotate-icon', !isActive);
                const content = this.nextElementSibling;
                if (!isActive) {
                    content.style.transition = "max-height 0.3s ease, top 0.3s ease";
                    content.style.top = "0";
                    content.style.marginBottom = "10px";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.transition = "none";
                    content.style.maxHeight = "0";
                    content.style.top = "-25px";
                    content.style.marginBottom = "0";
                }
            });
        });
    }
});

// section-20 full screen infinite slider
document.addEventListener("DOMContentLoaded", function () {
    const SlideContainer20 = document.querySelector(".slider_container_20");
    const Slide20 = document.querySelector(".slides-track_20");
    const PrevBtn20 = document.getElementById("prev_btn");
    const NextBtn20 = document.getElementById("next_btn");
    const interval = 10000;

    let slides20 = document.querySelectorAll('.slide_20');
    let index = 1;
    let slides20Id;
    let startX, currentX;

    const FirstClone = slides20[0].cloneNode(true);
    const LastClone = slides20[slides20.length - 1].cloneNode(true);

    FirstClone.id = 'First-Clone';
    LastClone.id = 'Last-Clone';

    Slide20.append(FirstClone);
    Slide20.insertBefore(LastClone, Slide20.firstChild);

    const slidewidth20 = slides20[index].clientWidth + 20;
    Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;

    const startslide20 = () => {
        slides20Id = setInterval(() => {
            MoveToNextSlide20();
        }, interval);
    };

    const GetSlides = () => document.querySelectorAll('.slide_20');

    const UpdateActiveClass = () => {
        slides20.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        updateDots();
    };

    const MoveToNextSlide20 = () => {
        slides20 = GetSlides();
        if (index >= slides20.length - 1) {
            index = 1;
            Slide20.style.transition = 'none';
            Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
            setTimeout(() => {
                Slide20.style.transition = '.7s';
            });
        } else {
            index++;
            Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
            Slide20.style.transition = '.7s';
        }
        UpdateActiveClass();
    };

    const MoveToPreviousSlide20 = () => {
        if (index <= 0) {
            index = slides20.length - 2;
            Slide20.style.transition = 'none';
            Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
            setTimeout(() => {
                Slide20.style.transition = '.7s';
            });
        } else {
            index--;
            Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
            Slide20.style.transition = '.7s';
        }
        UpdateActiveClass();
    };

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        if (Math.abs(diffX) > 20) {
            clearInterval(slides20Id);
            Slide20.style.transition = 'none';
            Slide20.style.transform = `translateX(${-slidewidth20 * index - diffX}px)`;
        }
    };

    const handleTouchEnd = () => {
        const diffX = startX - currentX;
        if (diffX > 0) {
            MoveToNextSlide20();
        } else {
            MoveToPreviousSlide20();
        }
        startslide20();
    };

    const createDots = () => {
        const dotContainer = document.getElementById('slide_dots');
        slides20.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(i + 1));
            dotContainer.appendChild(dot);
        });
        updateDots();
    };

    const updateDots = () => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index - 1);
        });
    };

    const goToSlide = (slideIndex) => {
        index = slideIndex;
        Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
        Slide20.style.transition = '.7s';
        UpdateActiveClass();
    };

    createDots();

    Slide20.addEventListener('touchstart', handleTouchStart);
    Slide20.addEventListener('touchmove', handleTouchMove);
    Slide20.addEventListener('touchend', handleTouchEnd);

    Slide20.addEventListener('transitionend', () => {
        slides20 = GetSlides();
        if (slides20[index].id === 'First-Clone') {
            Slide20.style.transition = 'none';
            index = 1;
            Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
        }
        if (slides20[index].id === 'Last-Clone') {
            Slide20.style.transition = 'none';
            index = slides20.length - 2;
            Slide20.style.transform = `translateX(${-slidewidth20 * index}px)`;
        }
        setTimeout(() => {
            Slide20.style.transition = '.7s';
            UpdateActiveClass();
        }, 0);
    });

    SlideContainer20.addEventListener('mouseenter', () => {
        clearInterval(slides20Id);
    });

    SlideContainer20.addEventListener('mouseleave', () => {
        startslide20();
    });

    NextBtn20.addEventListener('click', MoveToNextSlide20);
    PrevBtn20.addEventListener('click', MoveToPreviousSlide20);
    startslide20();
});

// Add event listener for scroll
if (window.innerWidth <= 1580) {
    document.addEventListener("DOMContentLoaded", function () {
        var iconElement = document.querySelector(".icon-security");
        function addAnimateClass() {
            iconElement.classList.add("animate");
        }
        function handleScroll() {
            var rect = iconElement.getBoundingClientRect();

            if (rect.top < window.innerHeight) {
                addAnimateClass();
                window.removeEventListener("scroll", handleScroll);
            }
        }
        window.addEventListener("scroll", handleScroll);
    });
};