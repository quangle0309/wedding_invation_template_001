<!-- JavaScript để điều khiển slide -->
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('opacity-100', i === index);
        slide.classList.toggle('opacity-0', i !== index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const navItems = document.querySelectorAll('.nav__item ul li');
    const nameTag = document.querySelector('.name-tag');

    if (window.scrollY > (window.innerHeight * 0.6)) {
        navbar.classList.remove('bg-opacity-20');
        nameTag.classList.add('text-primary');
        nameTag.classList.remove('text-white');
        navItems.forEach(item => {
            item.classList.add('text-primary');
            item.classList.remove('text-white');
        });
    } else {
        navItems.forEach(item => {
            item.classList.add('text-white');
            item.classList.remove('text-primary');
        });
        nameTag.classList.add('text-white');
        nameTag.classList.remove('text-primary');
        navbar.classList.add('bg-opacity-20');
    }
});


// preview image
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-item");
    const previewModal = document.getElementById("preview-modal");
    const previewImage = document.getElementById("preview-image");
    const closePreview = document.getElementById("close-preview");
    const navbar = document.querySelector('nav');

    images.forEach(img => {
        img.addEventListener("click", () => {
            previewImage.src = img.src;
            previewModal.classList.remove("hidden");
            navbar.classList.add("hidden");
        });
    });

    closePreview.addEventListener("click", () => {
        previewModal.classList.add("hidden");
        navbar.classList.remove("hidden");
    });

    previewModal.addEventListener("click", (e) => {
        if (e.target === previewModal) {
            previewModal.classList.add("hidden");
            navbar.classList.remove("hidden");
        }
    });
});