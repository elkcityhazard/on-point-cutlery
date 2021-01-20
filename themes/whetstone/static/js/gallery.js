const innerCont = document.querySelector('.inner-container');
const imageContainer = document.querySelectorAll('.image-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slideIndex = 0;

function showImage(slideIndex) {
    innerCont.style.transform = `translateX(${-slideIndex * 100}%)`;
    
}


next.addEventListener('click', function(e) {
    if (slideIndex >= imageContainer.length - 1 ) {
        slideIndex = imageContainer.length - 1;
        showImage(slideIndex);
    } else {
        slideIndex++;
    showImage(slideIndex);
    }
    
} )

prev.addEventListener('click', function(e) {
    if (slideIndex <= 0) {
        slideIndex = 0;
        showImage(slideIndex);
    } else {
        slideIndex--;
        showImage(slideIndex);
    }
} )
