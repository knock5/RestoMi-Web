import heroImage from '../../public/images/heros/hero-image_4.jpg';

class ContentComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        `;
    }
}

customElements.define('content-tag', ContentComponent);