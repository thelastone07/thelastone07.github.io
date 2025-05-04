
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight && 
      rect.bottom >= 0
    );
  }

  function get_index(n) {
    while (true) {
        var perm = Array.from({ length: n }, (_, i) => i);

        for (let i = perm.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [perm[i], perm[j]] = [perm[j], perm[i]];
        }

        let isDeranged = true;
        for (let i = 0; i < n; i++) {
            if (perm[i] === i) {
                isDeranged = false;
                break;
            }
        }
        if (isDeranged) {
            return perm;
        }
    }
}

  
  // Animation function for children
  async function animateChildren(parent) {
    const children = Array.from(parent.querySelectorAll('.loading'));
    console.log(children);
    const perm = get_index(children.length);
    
    // Animate in permutated order
    for (let i = 0; i < perm.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      children[perm[i]].classList.add('visible');
    }
    parent.dataset.animated = 'true'; 
  }
  
  // Intersection Observer setup
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateChildren(entry.target);
        entry.target.dataset.animated = 'true';
      }
    });
  }, { threshold: 0.5 });
  
  // Observe the grid container
const gridContainers = document.querySelectorAll('.grid-container');
gridContainers.forEach(container => {
    observer.observe(container);
    
    if (isElementInViewport(container)) {
      animateChildren(container);
    }
  });