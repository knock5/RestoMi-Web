import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import CONFIG from '../../globals/config';
import createLikeButtonTemplate from '../../components/FavoriteButton/FavButtonCreator';

const restoDetailPage = {
  async render() {
    return `
      <div class="wt-detail">
        <h1>Detail Restaurant</h1>
      </div>
      <div id="restoDetail" class="wrap-resto-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restoDetail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = await createLikeButtonTemplate();
    restoContainer.innerHTML = `
      <div class="d-content">
        <div class="d-img">
          <img class="dt-img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name} image">
        </div>
        
        <div class="d-info">
          <table class="table-detail">
            <tr class="d-row">
              <td class="d-data">Name</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.name}</td>
            </tr>
            <tr class="d-row">
              <td class="d-data">City</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.city}</td>
            </tr>
            <tr class="d-row">
              <td class="d-data">Address</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.address}</td>
            </tr>
            <tr class="d-row">
              <td class="d-data">Rating</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.rating}</td>
            </tr>
            <tr class="d-row">
              <td class="d-data">Description</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.description}</td>
            </tr>   
            <tr class="d-row">
              <td class="d-data">Foods</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.menus.foods}</td>
            </tr>
            <tr class="d-row">
              <td class="d-data">Drinks</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.menus.drinks}</td>
            </tr>
            <tr class="d-row">
              <td class="d-data">Reviews</td>
              <td class="d-data">:</td>
              <td class="d-data">${resto.customerReviews}</td>
            </tr>
          </table>
        </div>
      </div>
    `;
  },
};

export default restoDetailPage;
