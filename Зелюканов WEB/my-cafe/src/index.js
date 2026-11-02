import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const content = document.getElementById('content');

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const buttons = [
    { label: 'Главная', loader: loadHome, tab: 'home' },
    { label: 'Меню', loader: loadMenu, tab: 'menu' },
    { label: 'Контакты', loader: loadContact, tab: 'contact' },
  ];

  buttons.forEach(({ label, loader, tab }) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.dataset.tab = tab;
    btn.addEventListener('click', () => {
      clearAndLoad(loader, tab);
    });
    nav.appendChild(btn);
  });

  return nav;
}

function clearAndLoad(loadFunction, activeTab) {
  content.innerHTML = '';

  const nav = createNav();
  content.appendChild(nav);


  const activeBtn = nav.querySelector(`[data-tab="${activeTab}"]`);
  if (activeBtn) activeBtn.classList.add('active');


  const page = document.createElement('div');
  page.classList.add('page', 'fade-in');
  content.appendChild(page);

  loadFunction(page);
}


clearAndLoad(loadHome, 'home');