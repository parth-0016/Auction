const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const userId = generateUserId();
  const user = { name, phone, email, userId };
  saveUser(user);
  window.location.href = 'home.html';
});

function generateUserId() {
  const timestamp = new Date().getTime().toString();
  const random = Math.floor(Math.random() * 1000).toString();
  return `$`}
