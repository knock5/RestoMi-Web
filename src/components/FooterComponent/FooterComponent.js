class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="wrap-footer">
                <p class="foot">Copyright &copy; 2023 Resto<span class="hitext">Mi</span> - M I F F F</p>
            </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);