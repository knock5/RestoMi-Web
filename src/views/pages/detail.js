import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../contents/template-creator';

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
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    const resMakanan = resto.menus.foods;
    console.log(resMakanan);
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        city: resto.city,
        address: resto.address,
        rating: resto.rating,
        description: resto.description,
        menus: resto.menus,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default restoDetailPage;
