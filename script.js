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
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    slider.scrollTo({
        left: slides[currentIndex].offsetLeft,
        behavior: 'smooth',
    });
}

// Auto-slide every 5 seconds
setInterval(autoSlide, 5000);

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