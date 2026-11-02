export function loadContact(container) {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const headline = document.createElement('h1');
  headline.textContent = 'Контакты';
  contactDiv.appendChild(headline);

  const info = document.createElement('div');
  info.classList.add('contact-info');
  info.innerHTML = `
    <p><strong>Адрес:</strong> г. Москва, ул. Пирожковая, 12</p>
    <p><strong>Телефон:</strong> <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
    <p><strong>Часы работы:</strong> ежедневно с 9:00 до 22:00</p>
    <p><strong>Соцсеть:</strong>
      <a href="https://instagram.com" target="_blank" rel="noopener">@crumble_cafe</a>
    </p>
  `;
  contactDiv.appendChild(info);

  const bookBtn = document.createElement('button');
  bookBtn.classList.add('btn', 'btn--book');
  bookBtn.textContent = 'Забронировать столик';
  bookBtn.addEventListener('click', () => {
    alert('Столик забронирован! Мы вам перезвоним.');
  });
  contactDiv.appendChild(bookBtn);

  const form = document.createElement('form');
  form.classList.add('feedback-form');
  form.noValidate = true;

  form.innerHTML = `
    <h2>Обратная связь</h2>
    <label>
      Имя
      <input type="text" name="name" placeholder="Ваше имя">
      <span class="error" data-for="name"></span>
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="you@example.com">
      <span class="error" data-for="email"></span>
    </label>
    <label>
      Сообщение
      <textarea name="message" rows="4" placeholder="Ваше сообщение"></textarea>
      <span class="error" data-for="message"></span>
    </label>
    <button type="submit" class="btn">Отправить</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.elements.name;
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;


    form.querySelectorAll('.error').forEach((el) => (el.textContent = ''));
    [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove('invalid'));

    let valid = true;

    
    if (nameInput.value.trim().length < 2) {
      setError('name', 'Имя должно содержать минимум 2 символа');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      setError('email', 'Введите корректный email');
      valid = false;
    }

    if (messageInput.value.trim().length === 0) {
      setError('message', 'Сообщение не может быть пустым');
      valid = false;
    }

    if (!valid) return;

    alert(`Спасибо, ${nameInput.value.trim()}!`);
    form.reset();
  });

  function setError(field, msg) {
    const input = form.elements[field];
    const span = form.querySelector(`.error[data-for="${field}"]`);
    input.classList.add('invalid');
    span.textContent = msg;
  }

  contactDiv.appendChild(form);
  container.appendChild(contactDiv);
}