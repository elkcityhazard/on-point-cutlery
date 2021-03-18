const innerCont = document.querySelector('.inner-container');
const imageContainer = document.querySelectorAll('.image-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slideIndex = 0;


function showImage(n) {
    innerCont.style.transform = `translateX(${-n * 100}%)`;
}


prev.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = 0;
        showImage(slideIndex);
    } else {
        showImage(slideIndex);
    }
})

next.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > imageContainer.length - 1) {
        slideIndex = imageContainer.length - 1;
        showImage(slideIndex);
    } else {
        showImage(slideIndex);
    }
})








