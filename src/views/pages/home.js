import RestodbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../contents/template-creator';

const restoListsPage = {
  async render() {
    return `
    <div class="jumbotron">
      <div class="high-hero">
        <h2 class="title-hero" tabindex="0">Welcome to Resto<span class="hitext">Mi</span>!</h2>
        <p class="sub-text" tabindex="0">We are open since 2023, all of taste and love include to our products.</p>
        <a href="#resto-content" class="btn-hero">Explore Now</a>
      </div>
      <picture>
        <source media="(max-width: 425px)" srcset="./images/hero-image_2-small.jpg">
        <source media="(max-width: 768px)" srcset="./images/hero-image_2-large.jpg">
        
        <img src="./images/hero-image_2.jpg" alt="Hero Image RestoMi" class="img-hero lazyload">
      </picture>
    </div>

    <div class="title-section" id="resto-content">
        <h2>Explore Restaurant</h2>
    </div>
    
    <div class="wrap-card" id="restoList"></div>
    `;
  },

  async afterRender() {
    const restoList = await RestodbSource.listAllRestaurants();
    const restosContainer = document.querySelector('#restoList');
    restoList.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default restoListsPage;
