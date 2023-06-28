class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <div class="high-hero">
        <h2 class="title-hero" tabindex="0">Welcome to Resto<span class="hitext">Mi</span>!</h2>
        <p class="sub-text" tabindex="0">We are open since 2023, all of taste and love include to our products.</p>
        <a href="#main-content" class="btn-hero">Explore Now</a>
      </div>
      <img src="./images/heros/hero-image_2.jpg" alt="Hero Image RestoMi" class="img-hero">
    </div>

      <div class="title-section" id="main-content">
          <h2>Explore Restaurant</h2>
          <div class="wrap-card" id="resto">
          </div>
      </div>
    `;
  }

  async afterRender() {

  }
}

customElements.define('hero-content', HeroContent);
