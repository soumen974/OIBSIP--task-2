function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const goToTopButton = document.getElementById('goToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
            goToTopButton.classList.remove('goTOtop');
        } else {
            goToTopButton.classList.add('goTOtop');
        }
    });

    goToTopButton.addEventListener('click', () => {
        scrollToTop();
    });
});
