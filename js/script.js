// portfolio data
const portfolioData = {
  "personal": {
    "name": "Aniket Pathak",
    "tagline": "another avg cs grad dabbling with tech.",
    "currentRole": "currently automating solutions at",
    "company": {
      "name": "nokia",
      "url": "https://www.nokia.com/"
    },
    "social": [
      {
        "platform": "linkedin",
        "icon": "fab fa-linkedin-in",
        "url": "https://www.linkedin.com/in/aniket-pathak-8925311b5"
      },
      {
        "platform": "github",
        "icon": "fab fa-github",
        "url": "https://github.com/aniketpathak028"
      },
      {
        "platform": "instagram",
        "icon": "fab fa-instagram",
        "url": "https://www.instagram.com/anik3tpathak"
      },
      {
        "platform": "email",
        "icon": "fas fa-envelope",
        "url": "mailto:aniketpathak028@gmail.com"
      }
    ],
    "resumeUrl": "resume.pdf"
  },
  "experiences": [
    {
      "role": "Network Automation Engineer @ Nokia",
      "date": "July 2024 - Present",
      "description": "Building and improvising Network Automation solutions for clients using the Network Service Platform.",
      "technologies": ["JavaScript", "Python", "YANG"]
    },
    {
      "role": "Intern @ Nokia",
      "date": "Aug 2023 - May 2024",
      "description": "Worked on 2G -> 3G feature migration of a full stack Java application called TSPortal.",
      "technologies": ["Spring Boot", "Java", "SQL", "JavaScript"]
    }
  ],
  "projects": [
    {
      "title": "Envoy",
      "url": "#",
      "description": "Email management solution to send, track and schedule email across timezones.",
      "technologies": ["Spring Boot", "Java", "Quartz Scheduler"]
    },
    {
      "title": "Flexboard",
      "url": "#",
      "description": "React component library for resizable sidebars.",
      "technologies": ["React", "Typescript"]
    },
    {
      "title": "Network Traffic Classification",
      "url": "#",
      "description": "Deep Learning model fine tuned to classify network traffic.",
      "technologies": ["SKlearn", "Streamlit"]
    }
  ]
}

const body = document.querySelector("body");
const greetingsDisplay = document.getElementById("current-greetings");
const mainContainer = document.querySelector(".container");

document.addEventListener('DOMContentLoaded', () => {
    loadDynamicContent();
    setupNavigation();
    applyColorMode();
    handleResponsiveLayout();
    
    // Display greeting instead of time
    updateGreeting();
    setInterval(updateGreeting, 60000);
    
    // Check for URL hash on load and navigate accordingly
    const hash = window.location.hash.substring(1);
    if (hash && ['experiences', 'projects'].includes(hash)) {
      showSection(hash);
    } else {
      showSection('home');
    }
});

function updateGreeting() {
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

// Function specifically for loading social icons
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

// Load dynamic content from JSON data
function loadDynamicContent() {
  console.log("Loading dynamic content");
  
  // Home section content
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    console.log("Found hero content element");
    
    // Generate social icons HTML
    const socialIconsHTML = generateSocialIcons();
    console.log("Generated social icons HTML:", socialIconsHTML);
    
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
        <a href="#experiences" class="section-link" data-section="experiences">experiences</a>
        <a href="#projects" class="section-link" data-section="projects">projects</a>
        <a href="${portfolioData.personal.resumeUrl}" target="_blank" class="section-link resume-link">resume</a>
      </div>
    `;
  } else {
    console.error("Hero content element not found");
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
  
  // Log the state of the social icons after content is loaded
  const heroIcons = document.querySelector('.hero-icons');
  if (heroIcons) {
    console.log("Hero icons container:", heroIcons);
    console.log("Hero icons content:", heroIcons.innerHTML);
  }
}

// Setup navigation
function setupNavigation() {
  const sectionLinks = document.querySelectorAll('.section-link');
  const backArrows = document.querySelectorAll('.back-arrow');
  
  // Add event listeners to section links
  sectionLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(sectionId);
        history.pushState(null, null, `#${sectionId}`);
      });
    }
  });
  
  // Add event listeners to back arrows
  backArrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = arrow.getAttribute('data-section');
      showSection(sectionId);
      history.pushState(null, null, '#');
    });
  });
  
  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      showSection(hash);
    } else {
      showSection('home');
    }
  });
  
  // Add touch gestures for mobile
  setupTouchGestures();
  
  // Handle window resize - replace the existing resize handler
  window.addEventListener('resize', () => {
    handleResponsiveLayout();
    maintainSectionVisibility();
    
    // Debounce resize to prevent flickering
    if (window.resizeTimer) {
      clearTimeout(window.resizeTimer);
    }
    window.resizeTimer = setTimeout(() => {
      maintainSectionVisibility();
      positionFooter();
    }, 100);
  });
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
    const threshold = 80; // Reduced threshold for better responsiveness
    const activeSection = document.querySelector('.content-section.active');
    
    // Left swipe (negative value)
    if (touchStartX - touchEndX > threshold) {
      // If we're on home, go to experiences
      if (activeSection.id === 'home') {
        showSection('experiences');
        history.pushState(null, null, '#experiences');
      }
      // If we're on experiences, go to projects
      else if (activeSection.id === 'experiences') {
        showSection('projects');
        history.pushState(null, null, '#projects');
      }
    }
    
    // Right swipe (positive value)
    if (touchEndX - touchStartX > threshold) {
      // If we're on projects, go to experiences
      if (activeSection.id === 'projects') {
        showSection('experiences');
        history.pushState(null, null, '#experiences');
      }
      // If we're on experiences, go to home
      else if (activeSection.id === 'experiences') {
        showSection('home');
        history.pushState(null, null, '#');
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
  
  const timeEl = document.querySelector('.greetings-display');
  if (timeEl) {
    timeEl.style.right = '50%';
    timeEl.style.transform = 'translateX(50%)';
  }
  
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
  
  const timeEl = document.querySelector('.greetings-display');
  if (timeEl) {
    timeEl.style.right = '1rem';
    timeEl.style.transform = '';
  }
  
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
        <h1 class="hero-text">hi i am <b>aniket pathak</b>!</h1>
        <p class="mobile-intro-text">currently automating solutions at <a href="${portfolioData.personal.company.url}" target="_blank">${portfolioData.personal.company.name}</a></p>
        <div class="hero-icons">
          ${socialIconsHTML}
        </div>
        <div class="section-links">
          <a href="#experiences" class="section-link" data-section="experiences">experiences</a>
          <a href="#projects" class="section-link" data-section="projects">projects</a>
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