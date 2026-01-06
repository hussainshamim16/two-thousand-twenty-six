document.addEventListener("DOMContentLoaded", function () {


    //  ############################## Sliders  ##################### 
    let whatSwiper = new Swiper(".whatslider", {
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    let customerlove = new Swiper(".customerlove", {
        slidesPerView: 1,
        // initialSlide: 10,
        autoplay: true,
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2.4,
                spaceBetween: 20,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1349: {
                slidesPerView: 4.4,
                spaceBetween: 30
            }
        }
    });



});


//   ????????????????????????????????????????????????????????????????????????????????????????????????????????????? NOt Pull ??????????????????????????????????? 
// single product page functionality
// Simple thumbnail click to change main image
function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
    document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

// Size selection
document.querySelectorAll('.size-btn:not(.out-of-stock)').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Color selection
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function () {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});

// counter selection
let counterHtml = document.getElementById('counterNumber90');
console.log(counterHtml)
function minusCount() {
    if (counterHtml.innerText > 0) {
        counterHtml.innerText--;
    }
}
function plusCount() {
    counterHtml.innerText++;
}