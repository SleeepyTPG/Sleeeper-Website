const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

function setTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌞';
    } else {
        body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '🌙';
    }
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});