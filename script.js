document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
        });
    };

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlides();
    });

    next.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlides();
    });

    updateSlides();
});
