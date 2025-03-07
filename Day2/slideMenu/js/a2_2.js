$(function () {
    $('header > nav').hover(function () {
        $(this).find('.submenu').stop().slideDown(500)
    },
        function () {
            $('.submenu').stop().slideUp(500)
        })
})

// const slides = document.querySelectorAll('.slideContent img');
// let currentSlide = 0;

// function nextSlide () {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// }

// setInterval(nextSlide, 3000);
const slides = document.querySelectorAll('.slideContent img');
let currentSlide = 0;

// 초기 상태 설정
slides[0].classList.add('active');

function nextSlide() {
    // 현재 슬라이드에 prev 클래스 추가
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    
    // 다음 슬라이드 계산
    currentSlide = (currentSlide + 1) % slides.length;
    
    // 이전 슬라이드의 prev 클래스 제거
    setTimeout(() => {
        slides.forEach((slide, index) => {
            if (index !== currentSlide) {
                slide.classList.remove('prev');
            }
        });
    }, 500); // transition 시간과 동일하게

    // 다음 슬라이드 활성화
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);