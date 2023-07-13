import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="card">
    <span class="card-city">${resto.city}</span>
    <img src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="image ${resto.name} restaurant" class="card-image lazyload">
    <div class="card-title">
      <a href="/#/detail/${resto.id}" class="card-link-detail">${resto.name}</a>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `  
  <div class="d-content">
    <div class="d-img">
      <img class="dt-img lazyload" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name} image">
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
          <td class="d-data">
            <ol>
              ${resto.menus.foods.map((food) => `
                <li>${food.name}</li>
              `).join('')}
            </ol>
          </td>
        </tr>
        <tr class="d-row">
          <td class="d-data">Drinks</td>
          <td class="d-data">:</td>
          <td class="d-data">
            <ol>
              ${resto.menus.drinks.map((drink) => `
                <li>${drink.name}</li>
              `).join('')}
            </ol>
          </td>
        </tr>
      </table>
      
      <h3 class="title-review">Customer Reviews</h3>
      <div class="wrap-review">
        ${resto.customerReviews.map((res) => `
          <div class="card-review">
            <q>${res.review}</q>
            <p>${res.name}</p>
            <p>${res.date}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
