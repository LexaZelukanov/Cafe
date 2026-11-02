export function loadHome(container) {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const headline = document.createElement('h1');
  headline.textContent = 'Добро пожаловать в Crumble Cafe!';

  const description = document.createElement('p');
  description.textContent = 'Лучшая выпечка в городе, приготовленная с любовью.';

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);

  container.appendChild(homeDiv);
}