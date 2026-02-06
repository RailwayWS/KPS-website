/* =========================================
   NAVBAR SCROLL OBSERVER
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".nav-container");
    // Support both home page and Akademie page hero sections
    const heroSection = document.querySelector(".hero-section, .hero-modern");

    const sectionOptions = {
        rootMargin: "-100px 0px 0px 0px", // Trigger slightly before hero leaves
    };

    if (navbar && heroSection) {
        const sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    // Hero is gone (we are on light background) -> Make Nav Dark
                    navbar.classList.add("dark-nav");
                } else {
                    // Hero is visible (we are on dark background) -> Make Nav Light
                    navbar.classList.remove("dark-nav");
                }
            });
        }, sectionOptions);

        sectionObserver.observe(heroSection);
    }

    /* =========================================
       ACCORDION TOGGLE (Akademie page)
       ========================================= */
    const accordionItems = document.querySelectorAll(
        ".accordion .accordion-item",
    );

    if (accordionItems.length) {
        accordionItems.forEach((item) => {
            const header = item.querySelector(".accordion-item-header");
            const body = item.querySelector(".accordion-item-body");

            if (!header || !body) return;

            // Accessibility hints
            header.setAttribute("role", "button");
            header.setAttribute("tabindex", "0");
            header.setAttribute("aria-expanded", "false");
            body.setAttribute("aria-hidden", "true");

            const collapse = () => {
                header.classList.remove("active");
                body.style.maxHeight = null;
                header.setAttribute("aria-expanded", "false");
                body.setAttribute("aria-hidden", "true");
            };

            const expand = () => {
                header.classList.add("active");
                body.style.maxHeight = body.scrollHeight + "px";
                header.setAttribute("aria-expanded", "true");
                body.setAttribute("aria-hidden", "false");
            };

            const toggle = () => {
                const isOpen = header.classList.contains("active");

                // Close other items for single-open behavior
                accordionItems.forEach((other) => {
                    if (other === item) return;
                    const oHeader = other.querySelector(
                        ".accordion-item-header",
                    );
                    const oBody = other.querySelector(".accordion-item-body");
                    if (!oHeader || !oBody) return;
                    oHeader.classList.remove("active");
                    oHeader.setAttribute("aria-expanded", "false");
                    oBody.style.maxHeight = null;
                    oBody.setAttribute("aria-hidden", "true");
                });

                if (isOpen) {
                    collapse();
                } else {
                    expand();
                }
            };

            header.addEventListener("click", toggle);
            header.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle();
                }
            });
        });

        // Keep heights in sync when viewport changes
        window.addEventListener("resize", () => {
            accordionItems.forEach((item) => {
                const header = item.querySelector(".accordion-item-header");
                const body = item.querySelector(".accordion-item-body");
                if (header && body && header.classList.contains("active")) {
                    body.style.maxHeight = body.scrollHeight + "px";
                }
            });
        });
    }

    /* =========================================
       IMAGE MODAL (Akademie / GraadR / Koshuis galleries)
       Reuses existing modal styles
       ========================================= */
    const modal = document.getElementById("image-modal");
    const fullImg = document.getElementById("modal-full-img");
    const caption = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".modal-close-btn");

    // Support both naming styles:
    // - .gallery-card (Akademie / GraadR)
    // - .container .box (Koshuis)
    const galleryCards = document.querySelectorAll(
        ".gallery-card, .container .box",
    );

    if (modal && fullImg && closeBtn && galleryCards.length) {
        const openModal = (card) => {
            const imgEl = card.querySelector("img");
            const textEl =
                card.querySelector(".overlay-text") ||
                card.querySelector(".naam"); // Koshuis box label

            if (!imgEl) return;

            fullImg.src = imgEl.currentSrc || imgEl.src;

            if (caption) {
                caption.textContent = textEl
                    ? textEl.textContent
                    : imgEl.alt || "";
            }

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        };

        const closeModal = () => {
            modal.classList.remove("active");
            document.body.style.overflow = "";
            fullImg.src = "";
            if (caption) caption.textContent = "";
        };

        galleryCards.forEach((card) => {
            card.addEventListener("click", () => openModal(card));
        });

        closeBtn.addEventListener("click", closeModal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
        });
    }
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
   MOBILE MENU (Fixed for Web Component navbar)
   Uses event delegation so it works even when navbar HTML is injected later.
   ========================================= */

document.addEventListener("click", (e) => {
    const menuIcon = e.target.closest("#menu-icon");
    const closeLink = e.target.closest("#mobile__menu .close");

    // Open
    if (menuIcon) {
        const mobileMenu = document.getElementById("mobile__menu");
        if (mobileMenu) mobileMenu.style.height = "100%";
        return;
    }

    // Close
    if (closeLink) {
        e.preventDefault();
        const mobileMenu = document.getElementById("mobile__menu");
        if (mobileMenu) mobileMenu.style.height = "0%";
    }
});

// Close on ESC (optional but nice)
document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const mobileMenu = document.getElementById("mobile__menu");
    if (mobileMenu) mobileMenu.style.height = "0%";
});
