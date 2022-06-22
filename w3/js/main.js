
const $openBtn = document.getElementById('openModal');
const $closeBtn = document.getElementById('closeModal');
const $modalEl = document.getElementById('modal');

$openBtn.addEventListener('click', () => {
  $modalEl.classList.add('modal-visible');
});

$closeBtn.addEventListener('click', () => {
  $modalEl.classList.remove('modal-visible');
});
