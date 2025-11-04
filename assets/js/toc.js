// Table of Contents Generator
document.addEventListener('DOMContentLoaded', function() {
  const tocButton = document.getElementById('tocButton');
  const tocMenu = document.getElementById('tocMenu');
  const tocClose = document.getElementById('tocClose');
  const tocOverlay = document.getElementById('tocOverlay');
  const tocList = document.getElementById('tocList');
  const contentBody = document.getElementById('content-body');

  // Generate TOC from headings
  function generateTOC() {
    const headings = contentBody.querySelectorAll('h1, h2, h3');

    if (headings.length === 0) {
      tocList.innerHTML = '<li style="padding: 10px; color: #888;">No headings found</li>';
      return;
    }

    let currentH1 = null;
    let currentH2 = null;
    let h3Container = null;

    headings.forEach((heading, index) => {
      const level = heading.tagName.toLowerCase();
      const text = heading.textContent;

      // Create ID for the heading if it doesn't have one
      if (!heading.id) {
        heading.id = `heading-${level}-${index}`;
      }

      if (level === 'h1') {
        const li = document.createElement('li');
        li.className = 'toc-h1';
        li.innerHTML = `<a href="#${heading.id}">${text}</a>`;
        tocList.appendChild(li);
        currentH1 = li;
        currentH2 = null;
        h3Container = null;
      }
      else if (level === 'h2') {
        const li = document.createElement('li');
        li.className = 'toc-h2';
        li.innerHTML = `<a href="#${heading.id}">${text}</a>`;

        if (currentH1) {
          // Create a nested list if it doesn't exist
          let ul = currentH1.querySelector('ul');
          if (!ul) {
            ul = document.createElement('ul');
            ul.className = 'toc-list';
            currentH1.appendChild(ul);
          }
          ul.appendChild(li);
        } else {
          tocList.appendChild(li);
        }
        currentH2 = li;
        h3Container = null;
      }
      else if (level === 'h3') {
        if (!h3Container) {
          // Create container for H3 items
          h3Container = document.createElement('ul');
          h3Container.className = 'toc-h3-list';

          if (currentH2) {
            currentH2.appendChild(h3Container);
          } else if (currentH1) {
            currentH1.appendChild(h3Container);
          } else {
            const wrapper = document.createElement('li');
            wrapper.appendChild(h3Container);
            tocList.appendChild(wrapper);
          }
        }

        const li = document.createElement('li');
        li.innerHTML = `<a href="#${heading.id}">${text}</a>`;
        h3Container.appendChild(li);
      }
    });
  }

  // Open menu
  function openMenu() {
    tocMenu.classList.add('active');
    tocOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close menu
  function closeMenu() {
    tocMenu.classList.remove('active');
    tocOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners
  tocButton.addEventListener('click', openMenu);
  tocClose.addEventListener('click', closeMenu);
  tocOverlay.addEventListener('click', closeMenu);

  // Close menu when clicking a link
  tocList.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  // Generate the TOC
  generateTOC();

  // Track active section on scroll
  function updateActiveSection() {
    const headings = contentBody.querySelectorAll('h1, h2, h3');
    const scrollPosition = window.scrollY + 100; // Offset for better UX

    let activeHeading = null;

    headings.forEach(heading => {
      const headingTop = heading.offsetTop;
      if (scrollPosition >= headingTop) {
        activeHeading = heading;
      }
    });

    // Remove all active classes
    tocList.querySelectorAll('a').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to current section
    if (activeHeading) {
      const activeLink = tocList.querySelector(`a[href="#${activeHeading.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }

  // Update on scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(updateActiveSection, 50);
  });

  // Initial update
  updateActiveSection();
});
