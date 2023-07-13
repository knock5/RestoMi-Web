import LikeButtonInitiator from '../../src/utils/like-button-initiator';
import FavoriteRestoIdb from '../../src/data/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
    FavoriteRestos: FavoriteRestoIdb,
  });
};

export default createLikeButtonPresenterWithResto;
