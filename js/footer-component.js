class SiteFooter extends HTMLElement {
  connectedCallback() {
    fetch("/partials/footer.html")
      .then(r => r.text())
      .then(html => this.innerHTML = html)
      .catch(err => {
        console.error("Erreur chargement footer :", err);
        this.innerHTML = "<p>Footer indisponible</p>";
      });
  }
}

customElements.define("site-footer", SiteFooter);