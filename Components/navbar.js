// 1. Create a class that extends HTMLElement
class SpecialNavbar extends HTMLElement {
    connectedCallback() {
        const base = this.getAttribute("base") ?? "";

        this.innerHTML = `
            <nav>
                <div class="nav-container">
                    <!-- TOP ROW (logo left, hamburger right on mobile) -->
                    <div class="nav-actions">
                        <!-- Replace logo image with jade "KPS" text link -->
                        <a href="${base}index.html" class="brand-logo" aria-label="Gaan na tuisblad">
                            <span class="brand-kps">KPS</span>
                        </a>

                        

                        <i id="menu-icon" class="bx bx-menu" aria-label="Open menu" role="button" tabindex="0"></i>
                    </div>

                    <ul id="menu" class="links-list">
                        <li><a href="${base}Nav/Akademie.html">Akademie</a></li>
                        <li><a href="${base}Nav/GraadR.html">Graad R</a></li>
                        <li><a href="${base}Nav/Sport-kultuur.html">Sport & Kultuur</a></li>
                        <li><a href="${base}Nav/Personeel.html">Personeel</a></li>
                        <li><a href="${base}Nav/Koshuis.html">Koshuis</a></li>
                        <li><a href="${base}Nav/SkooltarieweVorms.html">Doen Aansoek</a></li>
                    </ul>

                    <a href="${base}index.html#contact-us" class="cta-button">Kontak Ons</a>

                    <div class="nav-mobile-panel" aria-label="Mobile menu">
                        <a class="mobile-link" href="${base}Nav/Akademie.html">Akademie</a>
                        <a class="mobile-link" href="${base}Nav/GraadR.html">Graad R</a>
                        <a class="mobile-link" href="${base}Nav/Sport-kultuur.html">Sport & Kultuur</a>
                        <a class="mobile-link" href="${base}Nav/Personeel.html">Personeel</a>
                        <a class="mobile-link" href="${base}Nav/Koshuis.html">Koshuis</a>
                        <a class="mobile-link" href="${base}Nav/SkooltarieweVorms.html">Doen Aansoek</a>
                        <a href="${base}index.html#contact-us" class="cta-button">Kontak Ons</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

// 3. Register the new tag (Must contain a hyphen)
customElements.define("app-navbar", SpecialNavbar);
