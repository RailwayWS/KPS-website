//menu button toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".links-list");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

//slider
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
        
            // Auto-slide every 3 seconds
            setInterval(autoSlide, 5000);


//akademie-accordian
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});