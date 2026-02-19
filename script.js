document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Projects - more responsive
new Swiper('.project-swiper', {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        480:  { slidesPerView: 1 },
        768:  { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2, spaceBetween: 40 }
    }
});

// Internships - autoplay + responsive
new Swiper('.internship-swiper', {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        480:  { slidesPerView: 1 },
        768:  { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2, spaceBetween: 40 }
    }
});
