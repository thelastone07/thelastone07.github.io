(function () {
  var root = document.documentElement;
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';

  function render() {
    button.textContent = root.getAttribute('data-theme') === 'dark' ? 'default' : 'darker';
  }

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'default' : 'dark';
    if (next === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try { localStorage.setItem('theme', next); } catch (e) {}
    render();
  });

  render();
  document.body.appendChild(button);

  // Hide the navbar when scrolling down, show it again when scrolling up
  var nav = document.querySelector('.Navbar');
  if (nav) {
    var lastY = window.pageYOffset;
    var ticking = false;

    function updateNav() {
      var y = window.pageYOffset;
      if (y < 80 || y < lastY - 4) {
        nav.classList.remove('nav-hidden');
      } else if (y > lastY + 4) {
        nav.classList.add('nav-hidden');
      }
      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateNav);
      }
    }, { passive: true });
  }
})();
