class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrap-footer">
        <p class="foot-main">Copyright &copy; 2023 Resto<span class="hitext">Mi</span> - M I F F F</p>
        <div class="content-foot">
          <p class="foot">All Data obtained from <a class="link-footer" href="https://restaurant-api.dicoding.dev" target="_blank">Dicoding Restaurant API</a></p>
          <p class="foot">Icons from <a class="link-footer" href="https://www.flaticon.com/free-icons/eat" title="eat icons" target="_blank">Eat icons created by Freepik - Flaticon</a></p>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
