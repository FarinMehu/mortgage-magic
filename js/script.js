//sticky navbar
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// animtaed image slider 
const imgArray = [
    'images/factfind.png',
    'images/Manage Cases.png',
    'images/Leads.png',
    'images/01 1.png',
]

let imgIndex = 0;
const imgSlider = document.getElementById('slider-img');
setInterval(() => {
    // console.log(imgIndex);
    if (imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
    const imgUrl = imgArray[imgIndex];
    // console.log(imgUrl);
    imgSlider.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000);

// featured in js start 
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// featured in js end
