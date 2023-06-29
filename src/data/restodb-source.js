import API_ENDPOINTS from '../globals/api-endpoints';

class RestoDbSource {
  static async listAllRestaurants() {
    const response = await fetch(API_ENDPOINTS.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    const result = await response.json();
    return result.restaurant;
  }
}

export default RestoDbSource;
