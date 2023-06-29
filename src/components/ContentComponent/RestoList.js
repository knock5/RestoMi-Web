import RestodbSource from '../../data/restodb-source';
import CONFIG from '../../globals/config';

class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const resultList = RestodbSource.listAllRestaurants();
    this.innerHTML = '';

    resultList.forEach((res) => {
      this.innerHTML += `
        <div class="card">
            <span class="card-city">${res.city}</span>
            <img src="${CONFIG.BASE_IMAGE_URL_SMALL + res.pictureId}" alt="image ${res.name} restaurant" class="card-image">
            <span class="card-rating">Rating : ${res.rating}</span>
            <h4 class="card-title">${res.name}</h4>
            <p class="card-desc">${res.description}</p>
        </div>
      `;
      console.log(res.name);
    });
  }
}

customElements.define('resto-list', RestoList);
