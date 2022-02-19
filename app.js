const body = document.body;
const slides = document.querySelectorAll('.slider');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlider = 0;

// last things

rightBtn.addEventListener("click", () => {
    activeSlider ++;

    if(activeSlider > slides.length -1) {
        activeSlider = 0;
    }

    setBodyBg();
    setActiveSlider();
});


leftBtn.addEventListener("click", () => {
    activeSlider --;

    if(activeSlider < 0) {
        activeSlider = slides.length - 1;
    }

    setBodyBg();
    setActiveSlider();
})


// 

setBodyBg();

function setBodyBg() {
    body.style.backgroundImage = slides[activeSlider].style.backgroundImage;
}

function setActiveSlider() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })

    slides[activeSlider].classList.add('active');
}

