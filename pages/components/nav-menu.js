class Navigation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `        
        <header>
        <div class="header">
          <nav>
          <div class="nav-menu">
          <ul class="nav">
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="about.html">About</a></li>
            <li class="nav-item"><a href="contact.html">Contact</a></li>
            <li class="nav-item"><a href="links.html">Links</a></li>
            <li class="nav-item"><a href="projects.html">Projects</a></li>
            <li class="nav-item"><a href="rules.html">Rules</a></li>
          </ul>
        </div>
          </nav>
        </header>
      `;
    }
  }

  var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}
  
  customElements.define('nav-menu', Navigation);