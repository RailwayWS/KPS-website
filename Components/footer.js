// 1. Create a class that extends HTMLElement
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        const base = this.getAttribute("base") ?? ""; // "" on index, "../" on /Nav pages

        // 2. Define the HTML content
        this.innerHTML = `
            <footer>
                <div class="footer-content">
                    <div class="footer-brand">
                        <h2>KPS</h2>
                        <p>Lig is lewe. Christelike onderwys in Namibië.</p>
                        <div class="socials">
                            <a href="https://www.facebook.com/profile.php?id=100063934898322" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/kps_privaatskool?igsh=MTFzajJxMmNrOGFrYg==" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div class="footer-links">
                        <h4>Skakels</h4>
                        <a href="${base}Nav/Akademie.html">Akademie</a>
                        <a href="${base}Nav/GraadR.html">Graad R</a>
                        <a href="${base}Nav/Sport-kultuur.html">Sport & Kultuur</a>
                        <a href="${base}Nav/Personeel.html">Personeel</a>
                        <a href="${base}Nav/Koshuis.html">Koshuis</a>
                        <a href="${base}Nav/SkooltarieweVorms.html">Doen Aansoek</a>
                        
                    </div>

                    <div class="footer-links">
                        <h4>Ekstra</h4>
                        <a href="${base}Nav/Geskiedenis.html">Geskiedenis</a>
                        <a href="${base}Nav/Oor-ons.html">Oor Ons</a>
                        <a href="${base}index.html#contact-us">Kontak Ons</a>
                    </div>

                    <div class="footer-bottom">
                        <p>
                            © 2025 Keetmanshoop Privaatskool. Developed by
                            <a href="https://railwaywebsolutions.com/">Railway Web Solutions</a>
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// 3. Register the new tag (Must contain a hyphen)
customElements.define("app-footer", SpecialFooter);
