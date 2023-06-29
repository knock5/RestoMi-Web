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
    const menus = resto.menus.foods;
    console.log(menus);
    restoContainer.innerHTML = `
      <div class="d-content">
        <div class="d-img">
          <img class="dt-img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name} image">
        </div>
        
        <div class="d-info">
          <table>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>${resto.name}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>:</td>
              <td>${resto.city}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>:</td>
              <td>${resto.address}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>:</td>
              <td>${resto.rating}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>:</td>
              <td>${resto.description}</td>
            </tr>   
            <tr>
              <td>Makanan</td>
              <td>:</td>
              <td>${menus.foods}</td>
            </tr>
          </table>
        </div>
      </div>
    `;
  },
};

export default restoDetailPage;
