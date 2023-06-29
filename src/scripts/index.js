import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../components/NavComponent/NavComponent';
import '../components/FooterComponent/FooterComponent';
import App from '../views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
