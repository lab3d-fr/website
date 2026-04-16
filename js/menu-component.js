class SiteMenu extends HTMLElement {
    connectedCallback() {
        fetch("/partials/menu.html")
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;

                // MENU BURGER
                const toggle = this.querySelector(".menu-toggle");
                const nav = this.querySelector("nav");

                if (toggle && nav) {
                    toggle.addEventListener("click", () => {
                        nav.classList.toggle("active");
                    });

                    // close menu when clicked
                    nav.querySelectorAll("a").forEach(link => {
                        link.addEventListener("click", () => {
                            nav.classList.remove("active");
                        });
                    });
                }

                // SECTION INDICATOR
                const indicator = this.querySelector(".section-indicator");
                const sections = document.querySelectorAll("section");

                if (indicator) {
                    window.addEventListener("scroll", () => {
                        let current = null;

                        sections.forEach(section => {
                            const top = window.scrollY;
                            const offset = section.offsetTop - 120;
                            const height = section.offsetHeight;

                            if (top >= offset && top < offset + height) {
                                current = section;
                            }
                        });

                        if (current) {
                            indicator.style.background = current.dataset.color;
                        }
                    });
                }
            })
            .catch(err => {
                console.error("Erreur chargement menu :", err);
                this.innerHTML = "<p>Menu indisponible</p>";
            });
    }
}

customElements.define("site-menu", SiteMenu);