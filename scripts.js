document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    menuIcon.addEventListener("click", function() {
        sidebar.style.left = "0";
        overlay.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        sidebar.style.left = "-250px";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function() {
        sidebar.style.left = "-250px";
        overlay.style.display = "none";
    });

    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            lightboxImg.setAttribute('src', imgSrc);
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close');
    const prevBtn = lightbox.querySelector('#prev-btn');
    const nextBtn = lightbox.querySelector('#next-btn');
    let currentImageIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            lightboxImg.setAttribute('src', imgSrc);
            lightbox.style.display = 'flex';
            currentImageIndex = index;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        const imgSrc = galleryItems[currentImageIndex].querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        const imgSrc = galleryItems[currentImageIndex].querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
    });
});