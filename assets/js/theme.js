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
})();
