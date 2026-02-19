document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

new Swiper('.project-swiper', {
    loop: true,
    spaceBetween: 25,
    autoHeight: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        480:  { slidesPerView: 1 },
        768:  { slidesPerView: 2, spaceBetween: 35 },
        1024: { slidesPerView: 2, spaceBetween: 45 }
    }
});

new Swiper('.internship-swiper', {
    loop: true,
    spaceBetween: 25,
    autoHeight: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        480:  { slidesPerView: 1 },
        768:  { slidesPerView: 2, spaceBetween: 35 },
        1024: { slidesPerView: 2, spaceBetween: 45 }
    }
});
