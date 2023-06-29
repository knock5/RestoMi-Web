import API_ENDPOINTS from '../globals/api-endpoints';

class RestoDbSource {
  static async listAllRestaurants() {
    const response = await fetch(API_ENDPOINTS.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    console.log(response.restaurants);
    return response.json();
  }
}

export default RestoDbSource;
