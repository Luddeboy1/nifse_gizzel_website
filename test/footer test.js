class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Select all elements except .content
      var elements = document.querySelectorAll('*:not(.content)');
  
      // Apply margin: 0 to selected elements
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.margin = '0';
      }
  
      this.innerHTML = `
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <div class="about">
                  <h4>About us</h4>
                </div>
                <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="privacy policy.html">privacy policy</a></li>
                  <li><a href="Terms Of Service.html">Terms Of Service</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>get help</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">shipping</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">order status</a></li>
                  <li><a href="#">payment options</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">watch</a></li>
                  <li><a href="#">bag</a></li>
                  <li><a href="#">shoes</a></li>
                  <li><a href="#">dress</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <a href="https://discord.gg/zP7etczaGK" target="_blank"><i class="fab fa-discord"></i></a>
                  <a href="www.youtube.com/@nifse_gizzel" target="_blank"><i class="fab fa-youtube"></i></a>
                  <a href="https://www.tiktok.com/@nifse_gizzel" target="_blank"><i class="fab fa-tiktok"></i></a>
                  <a href="https://twitter.com/nifse_gizzel" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>  
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);