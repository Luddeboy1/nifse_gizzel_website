class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="footer">
      <div class="button-module">
        <h3>Contact Us</h3>
        <p>Join our discord server where we are happy to help you.</p> 
        <a class="footer-contact-button" href="https://discord.gg/zP7etczaGK" target="_blank">Contact Us</a>
      </div>
          <div class="quick-links">
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="links.html">Links</a></li>
          <li><a href="links.html">Projects</a></li>
        </ul>
      </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);