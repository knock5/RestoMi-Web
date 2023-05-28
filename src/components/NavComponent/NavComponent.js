class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar">
            <a href="#" class="nav-logo">Resto<span class="hitext">Mi</span></a>

            <ul class="nav-menu" id="drawer">
                <li class="nav-item">
                <a href="./index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link">Favorite</a>
                </li>
                <li class="nav-item">
                <a href="https://www.instagram.com/miftachulhd/" class="nav-link">About Us</a>
                </li>
            </ul>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        `;

        const hamburgerElement = document.getElementsByClassName('humburger');
        const navMenu = document.getElementsByClassName('nav-menu');

        hamburgerElement.addEventListener('click', () => {
            hamburgerElement.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

customElements.define('nav-bar', NavBar);