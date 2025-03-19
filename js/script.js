const body = document.querySelector("body");
const greetingsDisplay = document.getElementById("current-greetings");
const mainContainer = document.querySelector(".container");

document.addEventListener('DOMContentLoaded', () => {
  applyColorMode();
  handleResponsiveLayout();

  updateGreetingBasedOnTimezone();
  setInterval(updateGreetingBasedOnTimezone, 60000);
  
  setupTouchGestures();
});

function updateGreetingBasedOnTimezone() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";
  
  if (hour >= 5 && hour < 12) {
    greeting = "good morning! 🌞";
  } else if (hour >= 12 && hour < 17) {
    greeting = "good afternoon! 🌤️";
  } else if (hour >= 17 && hour < 22) {
    greeting = "good evening! 🌙";
  } else {
    greeting = "nighty night! 💤";
  }
  
  const greetingsDisplay = document.getElementById("current-greetings");
  if (greetingsDisplay) {
    greetingsDisplay.textContent = greeting;
  }
}

function generateSocialIcons() {
  let iconsHTML = '';
  
  portfolioData.personal.social.forEach(item => {
    iconsHTML += `
      <a href="${item.url}" target="_blank" class="social-icon">
        <i class="${item.icon}"></i>
      </a>
    `;
  });
  
  return iconsHTML;
}

function loadDynamicContent() {
  console.log("Loading dynamic content");
  
  // Home section content
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    // Generate social icons HTML
    const socialIconsHTML = generateSocialIcons();
    
    // Check if we're in mobile view
    const isMobile = window.innerWidth <= 480;
    
    if (isMobile) {
      heroContent.innerHTML = `
        <h1 class="hero-text">hi i am <b>${portfolioData.personal.name.toLowerCase()}</b>!</h1>
        <p class="mobile-intro-text">${portfolioData.personal.currentRole} <a href="${portfolioData.personal.company.url}" target="_blank">${portfolioData.personal.company.name}</a></p>
        <div class="hero-icons">
          ${socialIconsHTML}
        </div>
        <div class="section-links">
          <a href="/experiences" class="section-link">experiences</a>
          <a href="/projects" class="section-link">projects</a>
          <a href="${portfolioData.personal.resumeUrl}" target="_blank" class="section-link resume-link">resume</a>
        </div>
      `;
    } else {
      heroContent.innerHTML = `
        <p class="hero-text">hi i am <b>${portfolioData.personal.name.toLowerCase()}</b>! ${portfolioData.personal.tagline}</p>
        <p class="hero-text"></p>
        <p class="hero-text">
          ${portfolioData.personal.currentRole}
          <a href="${portfolioData.personal.company.url}" target="_blank">${portfolioData.personal.company.name}</a>
        </p>
        <div class="hero-icons">
          ${socialIconsHTML}
        </div>
        <div class="section-links">
          <a href="/experiences" class="section-link">experiences</a>
          <a href="/projects" class="section-link">projects</a>
          <a href="${portfolioData.personal.resumeUrl}" target="_blank" class="section-link resume-link">resume</a>
        </div>
      `;
    }
  }
  
  // Experience section content
  const experienceContainer = document.querySelector('.experience-container');
  if (experienceContainer) {
    experienceContainer.innerHTML = portfolioData.experiences.map(exp => `
      <div class="experience-item">
        <div class="experience-header">
          <div class="experience-role">${exp.role}</div>
          <div class="experience-date">${exp.date}</div>
        </div>
        <div class="experience-description">
          ${exp.description}
        </div>
        <div class="technology-tags">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
  
  // Projects section content
  const projectsContainer = document.querySelector('#projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = `
      <div class="projects-page active" id="page-1">
        ${portfolioData.projects.map(project => `
          <div class="project-item">
            <div class="project-title">
              <a href="${project.url}" target="_blank">${project.title}</a>
            </div>
            <div class="project-description">
              ${project.description}
            </div>
            <div class="technology-tags">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Reinitialize event handlers after content is loaded
  initLinkHandlers();
  handleResponsiveLayout();
}

function setupNavigation() {
  const backArrows = document.querySelectorAll('.back-arrow');

  backArrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState(null, null, '/');
      router();
    });
  });
  
  setupTouchGestures();
}

// Function to show a specific section with smooth transitions
function showSection(sectionId) {
  const contentSections = document.querySelectorAll('.content-section');
  const sectionLinks = document.querySelectorAll('.section-link');
  const footer = document.querySelector('.footer');
  
  // Hide all sections
  contentSections.forEach(section => {
    if (section.id !== sectionId) {
      section.classList.remove('active');
      section.classList.add('hidden');
    }
  });
  
  // Remove active class from all links
  sectionLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Show/hide footer based on section
  if (sectionId === 'home') {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
  
  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
    selectedSection.classList.remove('hidden');
    
    // Add active class to the clicked link if not going back to home
    if (sectionId !== 'home') {
      const sectionLink = document.querySelector(`[data-section="${sectionId}"]`);
      if (sectionLink) {
        sectionLink.classList.add('active');
      }
    }
    
    // Animate items in the section
    animateContentItems(selectedSection);
  }
}

// New function to maintain section visibility during resize
function maintainSectionVisibility() {
  const activeSection = document.querySelector('.content-section.active');
  if (activeSection) {
    const sectionId = activeSection.id;
    
    // Temporarily remove transitions to prevent flashing
    contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
      section.style.transition = 'none';
    });
    
    // Make sure the active section stays visible
    activeSection.classList.add('active');
    activeSection.classList.remove('hidden');
    
    // Reset transitions after a brief delay
    setTimeout(() => {
      contentSections.forEach(section => {
        section.style.transition = '';
      });
    }, 50);
    
    // Re-animate content if needed
    animateContentItems(activeSection);
  }
}

// Function to animate content items - replace your existing function
function animateContentItems(section) {
  const items = section.querySelectorAll('.experience-item, .project-item');
  
  // Ensure all items are visible without animation
  items.forEach((item) => {
    item.style.opacity = '1';
    item.style.transform = 'none';
    // No longer adding fade-in class
  });
}

// Apply color mode (dark/light)
function applyColorMode() {
  if (localStorage.getItem("mode") == null) {
    localStorage.setItem("mode", "dark-mode");
  }
  
  body.classList.value = localStorage.getItem("mode");
}

// Setup touch gestures for mobile navigation
function setupTouchGestures() {
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const threshold = 80;
    const path = window.location.pathname;
    
    // Left swipe (negative value)
    if (touchStartX - touchEndX > threshold) {
      // If we're on home, go to experiences
      if (path === '/') {
        window.history.pushState(null, null, '/experiences');
        router();
      }
      // If we're on experiences, go to projects
      else if (path === '/experiences') {
        window.history.pushState(null, null, '/projects');
        router();
      }
    }
    
    // Right swipe (positive value)
    if (touchEndX - touchStartX > threshold) {
      // If we're on projects, go to experiences
      if (path === '/projects') {
        window.history.pushState(null, null, '/experiences');
        router();
      }
      // If we're on experiences, go to home
      else if (path === '/experiences') {
        window.history.pushState(null, null, '/');
        router();
      }
    }
  }
}

// responsive layout
function handleResponsiveLayout() {
  const width = window.innerWidth;
  if (width < 480) {
    adjustForMobile();
  } else if (width < 768) {
    adjustForTablet();
  } else {
    adjustForDesktop();
  }
  
  positionFooter();
}

// mobile
function adjustForMobile() {
  document.querySelectorAll('.hero-content, .section-links, .greetings-display, .footer').forEach(el => {
    el.style.textAlign = 'center';
  });
  
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.maxWidth = '150px';
    heroImage.style.margin = '0 auto 1rem auto';
  }
  
  document.querySelectorAll('.back-arrow').forEach(arrow => {
    arrow.style.width = '30px';
    arrow.style.height = '30px';
    arrow.style.fontSize = '0.8rem';
  }); 

  const sectionLinks = document.querySelector('.section-links');
  if (sectionLinks) {
    sectionLinks.style.justifyContent = 'center';
    sectionLinks.style.width = '100%';
    sectionLinks.style.margin = '1rem auto 0';
  }
  
  // Make sure each link has appropriate margins in mobile view
  document.querySelectorAll('.section-link').forEach(link => {
    link.style.margin = '0 0.5rem 0.5rem';
    link.style.textAlign = 'center';
  });

  document.querySelectorAll('.experience-header').forEach(header => {
    header.style.flexDirection = 'column-reverse';
    header.style.alignItems = 'flex-start';
    
    const dateEl = header.querySelector('.experience-date');
    if (dateEl) {
      dateEl.style.marginBottom = '0.3rem';
      dateEl.style.textAlign = 'left';
    }
  });
  
  const heroIcons = document.querySelector('.hero-icons');
  if (heroIcons) {
    heroIcons.style.justifyContent = 'center';
  }
}

// tablet
function adjustForTablet() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.textAlign = 'center';
    heroContent.style.width = '100%';
  }
  
  document.querySelectorAll('.hero-icons, .section-links').forEach(el => {
    el.style.justifyContent = 'center';
  });
  
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.maxWidth = '220px';
    heroImage.style.margin = '0 auto 1.5rem auto';
  }
  
  document.querySelectorAll('.experience-header').forEach(header => {
    header.style.flexDirection = 'row';
    header.style.alignItems = 'flex-start';
    
    const dateEl = header.querySelector('.experience-date');
    if (dateEl) {
      dateEl.style.marginBottom = '0';
      dateEl.style.textAlign = 'right';
    }
  });
}

// desktop
function adjustForDesktop() {
  document.querySelectorAll('.hero-content, .section-links, .greetings-display, .footer').forEach(el => {
    el.style.textAlign = '';
  });
  
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    if (window.innerWidth > 1025) {
      heroImage.style.maxWidth = window.innerWidth > 1300 ? '350px' : '320px';
      heroImage.style.margin = '0 0 0 3rem';
    }
  }
  
  document.querySelectorAll('.experience-header').forEach(header => {
    header.style.flexDirection = 'row';
    header.style.alignItems = 'center';
    
    const dateEl = header.querySelector('.experience-date');
    if (dateEl) {
      dateEl.style.marginBottom = '0';
      dateEl.style.textAlign = 'right';
    }
  });
  
  document.querySelectorAll('.back-arrow').forEach(arrow => {
    arrow.style.width = '36px';
    arrow.style.height = '36px';
    arrow.style.fontSize = '0.9rem';
  });
  
  const heroIcons = document.querySelector('.hero-icons');
  if (heroIcons) {
    heroIcons.style.justifyContent = 'flex-start';
  }
}

function positionFooter() {
  const footer = document.querySelector('.footer');
  const mainContent = document.querySelector('.main-content');
  
  if (footer && mainContent) {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
      const footerHeight = footer.offsetHeight;
      activeSection.style.paddingBottom = (footerHeight + 20) + 'px';
    }
  }
}

window.addEventListener('load', () => {
  console.log("Window loaded");
  const heroIcons = document.querySelector('.hero-icons');
  if (heroIcons) {
    console.log("Social icons container content after window load:", heroIcons.innerHTML);
  }
});

function updateHeroContent() {
  const heroContent = document.querySelector('.hero-content');
  const isMobile = window.innerWidth <= 480;
  
  if (heroContent) {
    if (isMobile) {
      const socialIconsHTML = generateSocialIcons();
      
      heroContent.innerHTML = `
        <h1 class="hero-text">hi I am <b>aniket pathak</b>!</h1>
        <p class="mobile-intro-text">currently working at <a href="${portfolioData.personal.company.url}" target="_blank">${portfolioData.personal.company.name}</a></p>
        <div class="hero-icons">
          ${socialIconsHTML}
        </div>
        <div class="section-links">
          <a href="/experiences" class="section-link" data-section="experiences">experiences</a>
          <a href="/projects" class="section-link" data-section="projects">projects</a>
          <a href="${portfolioData.personal.resumeUrl}" target="_blank" class="section-link resume-link">resume</a>
        </div>
      `;
    } else {
      loadDynamicContent();
    }
  }
}

window.addEventListener('load', updateHeroContent);
window.addEventListener('resize', updateHeroContent);

function adjustLayoutOnResize() {
  const heroContent = document.querySelector('.hero-content');
  const heroIcons = document.querySelector('.hero-icons');
  const sectionLinks = document.querySelector('.section-links');
  
  if (window.innerWidth > 768) {
    if (heroContent) heroContent.style.order = "1";
    if (heroIcons) heroIcons.style.justifyContent = "flex-start";
    if (sectionLinks) sectionLinks.style.justifyContent = "flex-start";
  } else {
    if (heroContent) heroContent.style.order = "2";
    if (heroIcons) heroIcons.style.justifyContent = "center";
    if (sectionLinks) sectionLinks.style.justifyContent = "center";
  }
}

window.addEventListener('load', adjustLayoutOnResize);
window.addEventListener('resize', adjustLayoutOnResize);

// Forces a repaint without affecting other browsers
window.addEventListener("load", () => {
  document.body.style.zoom = "1"; 
});
