class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul class="nav-menu">
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Home</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">Item 1.1</a></li>
                  <li><a href="#">Item 1.2</a></li>
                  <li><a href="#">Item 1.3</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Information</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="#">Item 2.1</a></li>
                  <li><a href="#">Item 2.2</a></li>
                  <li><a href="#">Item 2.3</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Contact Us</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="#">Item 3.1</a></li>
                  <li><a href="#">Item 3.2</a></li>
                  <li><a href="#">Item 3.3</a></li>
                </ul>
              </div>
            </li>
            <li class=  "nav-item dropdown">
              <a href="#" class="dropdown-toggle">Store</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="store.html">Store</a></li>
                  <li><a href="#">Item 4.2</a></li>
                  <li><a href="#">Item 4.3</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    `;

    // JavaScript for the dropdown functionality
    const dropdowns = this.querySelectorAll(".dropdown-toggle");

    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.nextElementSibling;
      let isDropdownOpen = false;

      dropdown.addEventListener("click", (event) => {
        event.preventDefault();

        if (isDropdownOpen) {
          dropdownMenu.classList.remove("show");
        } else {
          closeAllDropdowns();
          dropdownMenu.classList.add("show");
        }

        isDropdownOpen = !isDropdownOpen;
      });
    });

    window.addEventListener("click", (event) => {
      const dropdowns = this.querySelectorAll(".dropdown-toggle");

      dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.nextElementSibling;

        if (dropdownMenu.classList.contains("show") && !dropdown.contains(event.target)) {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  }
}

function closeAllDropdowns() {
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownMenus.forEach((menu) => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
}

customElements.define("nav-menu", Navigation);