// Menu button toggle for sliding overlay
const menuIcon = document.getElementById("menu-icon");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const contactUsButton = document.querySelector(".overlay__content .cta");

menuIcon.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});

// Handle "Contact Us" button click in the overlay
contactUsButton.addEventListener("click", () => {
    // Scroll to the Contact Us section
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
    // Close the overlay
    overlay.classList.remove("overlay--active");
});

// Slider
var slides = document.querySelectorAll('.mySlides');
var currentIndex = 0;
var totalSlides = slides.length;
var autoSlideInterval;

function updateSlides() {
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });
    slides[currentIndex].style.display = 'block';
}

function plusSlides(n, isManual = false) {
    currentIndex = (currentIndex + n + totalSlides) % totalSlides;
    updateSlides();
    if (isManual) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(function() { plusSlides(1, false); }, 5000);
    }
}

// Initial setup
updateSlides();
autoSlideInterval = setInterval(function() { plusSlides(1, false); }, 5000);

// Akademie accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});