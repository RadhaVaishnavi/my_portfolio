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
    autoHeight: true,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }
});

// Internship Carousel with autoplay for uniqueness
const internshipSwiper = new Swiper('.internship-swiper', {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }
});
