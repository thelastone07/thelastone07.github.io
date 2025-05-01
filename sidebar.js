
import { listSubFolders, listFolderImages } from './get_photos.js';

(async () => {
let menuItems = await listSubFolders();
console.log(menuItems);

const ITEM_HEIGHT = 50;
const PAD = 2;

const sidebarList = document.getElementById('sidebarList');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
 
let focusIndex = 0;

function renderCyclicList() {
  sidebarList.innerHTML = '';
  for (let i = -PAD; i <= PAD; i++) {
    const idx = (focusIndex + i + menuItems.length) % menuItems.length;
    const item = menuItems[idx];
    const li = document.createElement('li');
    li.style.position = 'absolute';
    li.style.top = `${(i + PAD) * ITEM_HEIGHT}px`;
    li.style.left = '0';
    li.style.right = '0';
    li.innerHTML = `<a href="${item.href}">${item.name}</a>`;
    if (i === 0) li.classList.add('focused');
    else if (Math.abs(i) === 1) li.classList.add('near');
    else if (Math.abs(i) === 2) li.classList.add('far');
    sidebarList.appendChild(li);
  }
  sidebarList.scrollTop = PAD * ITEM_HEIGHT;
}

function moveFocus(delta) {
  focusIndex = (focusIndex + delta + menuItems.length) % menuItems.length;
  renderCyclicList();
}

let wheelDeltaSum = 0;
const WHEEL_THRESHOLD = 50;

sidebarList.addEventListener('wheel', (e) => {
  e.preventDefault();
  wheelDeltaSum += e.deltaY;

  if (Math.abs(wheelDeltaSum) >= WHEEL_THRESHOLD) {
    moveFocus(Math.sign(wheelDeltaSum));
    wheelDeltaSum = 0;
  }
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (!sidebar.classList.contains('open')) return;
  if (e.key === 'ArrowDown') {
    moveFocus(1);
    e.preventDefault();
  } else if (e.key === 'ArrowUp') {
    moveFocus(-1);
    e.preventDefault();
  }
});

sidebarList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') closeSidebar();
});

function closeSidebar() {
  sidebarToggle.classList.remove('open');
  sidebar.classList.remove('open');
}

sidebarToggle.addEventListener('click', (e) => {
  console.log('Sidebar toggle clicked!');
  sidebarToggle.classList.toggle('open');
  sidebar.classList.toggle('open');
  e.stopPropagation();
  if (sidebar.classList.contains('open')) {
    renderCyclicList();
  }
});

document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('open') &&
    !sidebar.contains(e.target) &&
    !sidebarToggle.contains(e.target)
  ) {
    closeSidebar();
  }
});

renderCyclicList();
})();
