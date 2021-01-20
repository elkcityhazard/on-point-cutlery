const innerCont = document.querySelector('.inner-container');
const imageContainer = document.querySelectorAll('.image-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const lightPrev = document.getElementById('lightPrev');
const lightNext = document.getElementById('lightNext');
const lightImg = document.querySelectorAll('.image-container');
const slideImage = document.querySelectorAll('.image-container img');
let slideIndex = 0;

function showImage(slideIndex) {
    innerCont.style.transform = `translateX(${-slideIndex * 100}%)`;
}
    


function resetOpacity() {
    lightImg.forEach((image) => {
        image.style.opacity = 0;
    })
}

function showLightImage(n) {
    document.querySelector('.lightbox').style.opacity = 1;
    // resetOpacity();
    lightImg[n].style.display = 'block';
    lightImg[n].style.opacity = 1;

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

slideImage.forEach(image => {
    image.addEventListener('click', () => {
        showLightImage(slideIndex);
    })
})

lightNext.addEventListener('click', () => {
    if (slideIndex >= lightImg.length - 1 ) {
        slideIndex = lightImg.length - 1;
        showLightImage(slideIndex);
    } else {
        slideIndex++;
    showLightImage(slideIndex);
    console.log(lightImg[slideIndex])
    }

})






