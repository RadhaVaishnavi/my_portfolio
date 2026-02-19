document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ... previous smooth scroll ...

const projectSwiper = new Swiper('.project-swiper', {
    loop: true,
    autoHeight: false, // Disabled since we force height in CSS
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }
});

const internshipSwiper = new Swiper('.internship-swiper', {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    autoplay: { delay: 4000, disableOnInteraction: false }, // Unique auto-slide
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }
});
