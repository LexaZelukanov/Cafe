import menuData from './menu-data.json';
import croissantImg from './images/croissant.jpg';
import tiramisuImg from './images/tiramisu.jpg';
import cheesecakeImg from './images/cheesecake.jpg';

const images = {
  'Круассан': croissantImg,
  'Тирамису': tiramisuImg,
  'Чизкейк': cheesecakeImg,
};

export function loadMenu(container) {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const visits = Number(localStorage.getItem('menuVisits') || 0) + 1;
  localStorage.setItem('menuVisits', visits);

  const counter = document.createElement('p');
  counter.classList.add('visit-counter');
  counter.textContent = `Вы открывали это меню ${visits} раз(а).`;
  menuDiv.appendChild(counter);

  const headline = document.createElement('h1');
  headline.textContent = 'Наше меню';
  menuDiv.appendChild(headline);

  const grid = document.createElement('div');
  grid.classList.add('menu-grid');

  menuData.forEach((dish) => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    if (images[dish.name]) {
      const img = document.createElement('img');
      img.src = images[dish.name];
      img.alt = dish.name;
      img.classList.add('menu-card__img');
      card.appendChild(img);
    }

    const name = document.createElement('h3');
    name.textContent = dish.name;

    const price = document.createElement('p');
    price.classList.add('menu-card__price');
    price.textContent = `${dish.price} ₽`;

    const desc = document.createElement('p');
    desc.textContent = dish.description;

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(desc);
    grid.appendChild(card);
  });

  menuDiv.appendChild(grid);
  container.appendChild(menuDiv);
}