import RestodbSource from '../../data/restodb-source';
import CONFIG from '../../globals/config';

const restoListsPage = {
  async render() {
    return `
    <div class="jumbotron">
      <div class="high-hero">
        <h2 class="title-hero" tabindex="0">Welcome to Resto<span class="hitext">Mi</span>!</h2>
        <p class="sub-text" tabindex="0">We are open since 2023, all of taste and love include to our products.</p>
        <a href="#resto-content" class="btn-hero">Explore Now</a>
      </div>
      <img src="./images/heros/hero-image_2.jpg" alt="Hero Image RestoMi" class="img-hero">
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
      restosContainer.innerHTML += `
        <div class="card">
            <span class="card-city">${resto.city}</span>
            <img src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="image ${resto.name} restaurant" class="card-image">
            <div class="card-title">
                <a href="#/detail" class="card-link-detail">${resto.name}</a>
            </div>
        </div>
      `;
    });
  },
};

export default restoListsPage;
