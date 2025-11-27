/* =========================================
   NAVBAR SCROLL OBSERVER
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".nav-container");
    const heroSection = document.querySelector(".hero-section");

    const sectionOptions = {
        rootMargin: "-100px 0px 0px 0px", // Trigger slightly before hero leaves
    };

    const sectionObserver = new IntersectionObserver(function (
        entries,
        sectionObserver
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                // Hero is gone (we are on light background) -> Make Nav Dark
                navbar.classList.add("dark-nav");
            } else {
                // Hero is visible (we are on dark background) -> Make Nav Light
                navbar.classList.remove("dark-nav");
            }
        });
    },
    sectionOptions);

    sectionObserver.observe(heroSection);
});

/* =========================================
   SLIDESHOW (Existing Code)
   ========================================= */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Safety check if slides exist
    if (slides.length === 0) return;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Auto-play slides
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

/* =========================================
   MOBILE MENU (Existing Code)
   ========================================= */
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile__menu");
const closeBtn = document.querySelector(".close");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        mobileMenu.style.height = "100%";
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        mobileMenu.style.height = "0%";
    });
}
