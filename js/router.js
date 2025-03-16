const routes = {
    '/': { 
      template: `
        <div id="home" class="content-section active">
          <div class="hero">
            <div class="hero-content">
              <!-- Dynamic content will be loaded here by JavaScript -->
            </div>
            <img
              class="hero-image"
              src="img/me.png"
              alt="generated at some point using notion"
            />
          </div>
        </div>
      `,
      title: 'Aniket Pathak'
    },
    '/experiences': { 
      template: `
        <section id="experiences" class="content-section active">
          <div class="section-header">
            <a href="/" class="back-arrow" data-section="home">
              <i class="fas fa-arrow-left"></i>
            </a>
            <h2>Experience</h2>
          </div>
          <div class="content-wrapper">
            <div class="experience-container">
              <!-- Dynamic content will be loaded here by JavaScript -->
            </div>
          </div>
        </section>
      `
    },
    '/projects': { 
      template: `
        <section id="projects" class="content-section active">
          <div class="section-header">
            <a href="/" class="back-arrow" data-section="home">
              <i class="fas fa-arrow-left"></i>
            </a>
            <h2>Projects</h2>
          </div>
          <div class="content-wrapper">
            <div class="projects-container" id="projects-container">
              <!-- Dynamic content will be loaded here by JavaScript -->
            </div>
          </div>
        </section>
      `
    }
  };
  function router() {
    let path = window.location.pathname;

    if (!routes[path]) {
      path = '/';
      window.history.replaceState(null, null, path);
    }
    
    const route = routes[path];
    
    document.getElementById('page-content').innerHTML = route.template;
    
    document.title = route.title;
    
    const footer = document.querySelector('.footer');
    footer.style.display = path === '/' ? 'block' : 'none';
    
    const greetingsDisplay = document.querySelector('.greetings-display');
    if (greetingsDisplay) {
      greetingsDisplay.style.display = path === '/' ? 'block' : 'none';
    }
    
    loadDynamicContent();
    
    initLinkHandlers();
  }
  
  function initLinkHandlers() {
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      if (!link.hasAttribute('data-router-handled')) {
        link.setAttribute('data-router-handled', 'true');
        link.addEventListener('click', (e) => {
          if (link.getAttribute('target') !== '_blank') {
            e.preventDefault();
            const href = link.getAttribute('href');
            window.history.pushState(null, null, href);
            router();
          }
        });
      }
    });
  }
  
  window.addEventListener('popstate', router);
  
  document.addEventListener('DOMContentLoaded', () => {
    router();
  });