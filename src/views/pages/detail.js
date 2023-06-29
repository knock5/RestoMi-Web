import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import CONFIG from '../../globals/config';

const restoDetailPage = {
  async render() {
    return `
      <div class="wt-detail">
        <h1>Detail Restaurant</h1>
      </div>
      <div id="restoDetail" class="wrap-resto-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restoDetail');
    restoContainer.innerHTML = `
      <div class="d-content">
        <div class="d-img">
          <img class="dt-img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name} image">
        </div>
        <div class="d-info">
          <h4>Name</h4>
          <p>🏷️ ${resto.name}</p>
          <h4>City</h4>
          <p>🏙️ ${resto.city}</p>
          <h4>Address</h4>
          <p>🏠 ${resto.address}</p>
          <h4>Rating</h4>
          <p>⭐ ${resto.rating}</p>
          <h4>Description</h4>
          <p>${resto.description}</p>
        </div>
      </div>
    `;
  },
};

export default restoDetailPage;
