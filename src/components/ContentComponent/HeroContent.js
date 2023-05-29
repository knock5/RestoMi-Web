class HeroContent extends HTMLElement {
  connectedCallback() {
      this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
        <img src="./images/heros/hero-image_2.jpg" alt="Content Image RestoMi" class="img-hero">
    </div>

      <div class="title-section" id="main-content">
          <h2>Explore Restaurant</h2>
      </div>
    `;
  }

}

customElements.define('hero-content', HeroContent);