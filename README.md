# RestoMi - Restaurant Catalogue PWA

![RestoMi Logo](./src/public/images/icons/cutlery256.png)

**RestoMi** adalah Progressive Web Application (PWA) untuk katalog restoran yang memungkinkan pengguna untuk menjelajahi daftar restoran, melihat detail restoran, dan menyimpan restoran favorit. Aplikasi ini dibangun dengan teknologi web modern dan dapat diakses secara offline.

## ✨ Fitur Utama

- 🏠 **Homepage** - Tampilan daftar semua restoran dengan layout card yang responsif
- 📱 **Progressive Web App** - Dapat diinstall dan berjalan offline
- ❤️ **Sistem Favorit** - Simpan dan kelola restoran favorit dengan IndexedDB
- 🔍 **Detail Restoran** - Informasi lengkap termasuk menu, rating, dan customer reviews
- 📱 **Responsive Design** - Optimal di semua perangkat (mobile, tablet, desktop)
- ⚡ **Lazy Loading** - Optimasi performa dengan lazy loading gambar
- 🎯 **Accessibility** - Mendukung screen reader dan keyboard navigation

## 🛠️ Teknologi yang Digunakan

### Frontend

- **Vanilla JavaScript ES6+** - Modern JavaScript tanpa framework
- **Web Components** - Custom elements untuk komponen reusable
- **CSS3** - Styling dengan responsive design
- **HTML5** - Semantic markup

### Build Tools & Development

- **Webpack 5** - Module bundler dengan konfigurasi dev/prod
- **Babel** - JavaScript transpiler untuk browser compatibility
- **ESLint** - Code linting dengan Airbnb style guide
- **Sharp** - Image optimization

### PWA Features

- **Service Worker** - Caching untuk offline functionality
- **Web App Manifest** - Native app-like installation
- **Workbox** - PWA libraries untuk caching strategies

### Testing

- **Karma + Jasmine** - Unit testing
- **CodeceptJS + Puppeteer** - End-to-end testing

### Data & Storage

- **IndexedDB** - Local database untuk data favorit
- **Restaurant API** - External API dari Dicoding
- **IDB Library** - Promise-based IndexedDB wrapper

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 atau lebih baru)
- npm atau yarn
- Browser modern (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone repository**

   ```bash
   git clone https://github.com/knock5/RestoMi-Web.git
   cd RestoMi-Web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Development server**

   ```bash
   npm run start-dev
   ```

   Aplikasi akan berjalan di `http://localhost:8080`

4. **Build untuk production**

   ```bash
   npm run build
   ```

5. **Serve production build**
   ```bash
   npm run serve
   ```

## 📁 Struktur Project

```
RestoMi-Web/
├── src/
│   ├── components/          # Web Components
│   │   ├── FavoriteButton/  # Like/Unlike button
│   │   ├── FooterComponent/ # Footer component
│   │   └── NavComponent/    # Navigation component
│   ├── data/               # Data layer
│   │   ├── favorite-resto-idb.js    # IndexedDB operations
│   │   └── restodb-source.js        # API calls
│   ├── globals/            # Global configurations
│   │   ├── api-endpoints.js # API endpoint definitions
│   │   └── config.js       # App configuration
│   ├── public/             # Static assets
│   │   ├── app.webmanifest # PWA manifest
│   │   └── images/         # Icons and images
│   ├── routes/             # Routing system
│   │   ├── routes.js       # Route definitions
│   │   └── url-parser.js   # URL parsing utility
│   ├── scripts/            # Entry points
│   │   └── index.js        # Main entry point
│   ├── styles/             # CSS files
│   ├── templates/          # HTML templates
│   │   └── index.html      # Main HTML template
│   ├── utils/              # Utility functions
│   └── views/              # Page components
│       ├── app.js          # Main app class
│       ├── contents/       # Template creators
│       └── pages/          # Page implementations
├── e2e/                    # End-to-end tests
├── specs/                  # Unit tests
├── webpack.*.js            # Webpack configurations
├── karma.conf.js           # Karma test configuration
├── codecept.conf.js        # CodeceptJS configuration
└── package.json
```

## 🎯 Available Scripts

| Command               | Description                                |
| --------------------- | ------------------------------------------ |
| `npm run start-dev`   | Start development server dengan hot reload |
| `npm run build`       | Build aplikasi untuk production            |
| `npm run serve`       | Serve production build                     |
| `npm run build-image` | Optimize images dengan Sharp               |
| `npm test`            | Run unit tests dengan Karma                |
| `npm run e2e`         | Run end-to-end tests dengan CodeceptJS     |
| `npm run lint`        | Run ESLint untuk code quality check        |

## 🌐 API Integration

Aplikasi ini mengintegrasikan dengan [Dicoding Restaurant API](https://restaurant-api.dicoding.dev):

- **GET** `/list` - Mendapatkan daftar semua restoran
- **GET** `/detail/{id}` - Mendapatkan detail restoran berdasarkan ID

### API Response Structure

```javascript
// List Restaurants
{
  "error": false,
  "message": "success",
  "count": 20,
  "restaurants": [...]
}

// Restaurant Detail
{
  "error": false,
  "message": "success",
  "restaurant": {
    "id": "rqdv5juczeskfw1e867",
    "name": "Melting Pot",
    "description": "Lorem ipsum...",
    "city": "Medan",
    "address": "Jln. Pandeglang no 19",
    "pictureId": "14",
    "rating": 4.2,
    "menus": {
      "foods": [...],
      "drinks": [...]
    },
    "customerReviews": [...]
  }
}
```

## 💾 Local Storage

Aplikasi menggunakan IndexedDB untuk menyimpan data favorit:

- **Database:** `restaurant-list-database`
- **Object Store:** `restaurants`
- **Key Path:** `id`

## 🧪 Testing

### Unit Testing

```bash
npm test
```

- Framework: Karma + Jasmine
- Coverage: Core functionality dan utility functions

### E2E Testing

```bash
npm run e2e
```

- Framework: CodeceptJS + Puppeteer
- Scenarios: Like/unlike restaurant functionality

## 📱 PWA Features

### Installable

- Aplikasi dapat diinstall di perangkat mobile dan desktop
- Icon dan splash screen tersedia untuk semua ukuran

### Offline Capability

- Service Worker untuk caching resources
- Favorite restaurants dapat diakses offline
- Graceful degradation saat offline

### Performance

- Lazy loading untuk optimasi gambar
- Code splitting dengan Webpack
- Minification dan compression

## 🎨 Design & UX

### Responsive Design

- Mobile-first approach
- Breakpoints untuk tablet dan desktop
- Touch-friendly interface

### Accessibility

- Semantic HTML structure
- ARIA labels untuk screen readers
- Keyboard navigation support
- Skip links untuk navigasi cepat

### Visual Design

- Modern card-based layout
- Consistent color scheme
- Loading states dan animations
- FontAwesome icons

## 🔧 Development

### Code Style

- ESLint dengan Airbnb configuration
- Modular JavaScript architecture
- Separation of concerns
- Clean code principles

### Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Miftachul Huda**

- Email: putihbiru0505@gmail.com
- Instagram: [@miftachulhd](https://www.instagram.com/miftachulhd/)

## 🙏 Acknowledgments

- [Dicoding](https://dicoding.com) untuk Restaurant API
- [Freepik - Flaticon](https://www.flaticon.com/free-icons/eat) untuk icons
- FontAwesome untuk icon library

---

⭐ **Star this repository jika project ini membantu Anda!**
