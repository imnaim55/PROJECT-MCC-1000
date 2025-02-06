let slideIndex = 1;
let startX = 0;
let endX = 0;

showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
    });
    Array.from(dots).forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX > endX + 50) {
        plusSlides(1);
    } else if (startX < endX - 50) {
        plusSlides(-1);
    }
}

setInterval(() => {
    plusSlides(1);
}, 4500);
