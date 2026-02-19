document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Carousel
const projectSwiper = new Swiper('.project-swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }
});

// Internship Carousel
const internshipSwiper = new Swiper('.internship-swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }
});

// Cert Carousel
const certSwiper = new Swiper('.cert-swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 3 } }
});
