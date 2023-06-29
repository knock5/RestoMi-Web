const restoFavorite = {
  async render() {
    return `
      <div id="restoFav"></div>
    `;
  },

  async afterRender() {
    const resDetailContainer = document.querySelector('#restoDetail');
    resDetailContainer.innerHTML = `
      <h1>Detail Restaurant</h1>
    `;
  },
};

export default restoFavorite;
