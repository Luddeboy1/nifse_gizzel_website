class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `        
        <header>
        <div class="header">
        <nav-menu></nav-menu>
          <div class="top">
            <div class="Banner"><img src="./public/images/Static.gif"></div>
            <div class="top-buttons">
              <div class="top-button">
                <a href="https://discord.gg/zP7etczaGK" target="_blank">
                  Discord Server
                </a>
              </div>
              <div class="top-button">
                <a href="links.html" target="_blank">Links</a>
                </a>
              </div>
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);