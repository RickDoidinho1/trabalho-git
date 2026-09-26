const btn = document.getElementById('theme-toggle');
const body = document.body;

// Carregar preferência salva ou do sistema
if (localStorage.getItem('theme') === 'dark' ||
   (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.classList.add('dark-mode');
}

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme',
    body.classList.contains('dark-mode') ? 'dark' : 'light');
});   