import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="card">
    <span class="card-city">${resto.city}</span>
    <img src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="image ${resto.name} restaurant" class="card-image">
    <div class="card-title">
      <a href="/#/detail/${resto.id}" class="card-link-detail">${resto.name}</a>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
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

export { createRestoItemTemplate, createRestoDetailTemplate };
