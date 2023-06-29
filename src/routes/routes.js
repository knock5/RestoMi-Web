import restoListsPage from '../views/pages/home';
import restoDetailPage from '../views/pages/detail';
import restoFavorite from '../views/pages/favorite';

const routes = {
  '/': restoListsPage,
  '/home': restoListsPage,
  '/favorite': restoFavorite,
  '/detail/:id': restoDetailPage,
};

export default routes;
