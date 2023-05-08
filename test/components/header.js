class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #999;
        color: black;
        padding: 10px 20px;
        }
      
        .menu {
        display: flex;
        list-style: none;
        }
      
        .menu li {
        margin-right: 250px;
        }
      
        .menu a {
        color: black;
        text-decoration: none;
        transition: all 0.3s ease;
        }
      
        .menu a:hover {
        color: blue;
        font-size: 18px;
        border: 2px solid black;
        padding: 5px;
        border-radius: 20px;
        }
        </style>          
        <header>
          <nav>
          <div class="nav-menu">
          <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="links.html">Links</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="rules.html">Rules</a></li>
          </ul>
        </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);