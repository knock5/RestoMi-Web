const restoFavorite = {
  async render() {
    return `
      <div class="fav-resto">
        <h1>Favorite Restaurant</h1>
        <h1>Favorite Restaurant</h1>
        <h1>Favorite Restaurant</h1>
        <h1>Favorite Restaurant</h1>
      </div>
      
      <div id="restoFav"></div>
    `;
  },

  async afterRender() {
    const resDetailContainer = document.querySelector('#restoFav');
    resDetailContainer.innerHTML = `
    `;
  },
};

export default restoFavorite;
