const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    rootElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    const isDark = rootElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        rootElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    }
});

const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-flip')) {
            card.classList.remove('is-flipped');
            card.blur(); 
            return;
        }
        card.classList.toggle('is-flipped');
    });
});
