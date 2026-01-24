// 1. Create a class that extends HTMLElement
class SpecialNavbar extends HTMLElement {
    connectedCallback() {
        const base = this.getAttribute("base") ?? ""; // "" on index, "../" on /Nav pages

        this.innerHTML = `
            <nav>
                <div class="nav-container">
                    <a href="${base}index.html" class="brand-logo" aria-label="Keetmanshoop Privaatskool Home">
                        <span style="color: var(--primary)">KPS</span>
                    </a>

                    <ul id="menu" class="links-list">
                        <li><a href="${base}Nav/Akademie.html">Akademie</a></li>
                        <li><a href="${base}Nav/GraadR.html">Graad R</a></li>
                        <li><a href="${base}Nav/Sport-kultuur.html">Sport & Kultuur</a></li>
                        <li><a href="${base}Nav/Personeel.html">Personeel</a></li>
                        <li><a href="${base}Nav/Koshuis.html">Koshuis</a></li>
                        <li><a href="${base}Nav/SkooltarieweVorms.html">Doen Aansoek</a></li>
                    </ul>

                    <div class="nav-actions">
                        <a href="${base}index.html#contact-us" class="cta-button">Kontak Ons</a>
                        <i id="menu-icon" class="bx bx-menu" aria-label="Open menu" role="button" tabindex="0"></i>
                    </div>
                </div>
            </nav>

            <div id="mobile__menu" class="overlay">
                <a href="#" class="close" aria-label="Close menu">&times;</a>
                <div class="overlay__content">
                    <a href="${base}Nav/Akademie.html">Akademie</a>
                    <a href="${base}Nav/GraadR.html">Graad R</a>
                    <a href="${base}Nav/Sport-kultuur.html">Sport & Kultuur</a>
                    <a href="${base}Nav/Personeel.html">Personeel</a>
                    <a href="${base}Nav/Koshuis.html">Koshuis</a>
                    <a href="${base}Nav/SkooltarieweVorms.html">Doen Aansoek</a>
                    <a href="${base}index.html#contact-us" class="cta-button mobile-cta">Kontak Ons</a>
                </div>
            </div>
        `;
    }
}

// 3. Register the new tag (Must contain a hyphen)
customElements.define("app-navbar", SpecialNavbar);
