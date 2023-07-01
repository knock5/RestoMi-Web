import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../contents/template-creator';

const restoFavorite = {
  async render() {
    return `
      <div class="fav-resto">
        <h1>Your Favorite Restaurant</h1>
      </div>
      
      <div class="wrap-card" id="restoFav"></div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const resDetailContainer = document.querySelector('#restoFav');
    restos.forEach((resto) => {
      resDetailContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default restoFavorite;
