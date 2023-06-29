const restoFavorite = {
  async render() {
    return `
      <h1>Detail Restaurant</h1>
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
