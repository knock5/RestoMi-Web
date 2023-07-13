import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../components/NavComponent/NavComponent';
import '../components/FooterComponent/FooterComponent';
import App from '../views/app';
import swRegister from '../utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

// Fungsi untuk menampilkan loading
function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

// Fungsi untuk menyembunyikan loading
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

// Event listener untuk saat navigasi halaman dimulai
window.addEventListener('beforeunload', () => {
  showLoading();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  hideLoading();
});
