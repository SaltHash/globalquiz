function toggleSettingsMenu() {
    const menu = document.getElementById('settingsMenu');
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
}

function updateSettings() {
    const isDark = document.getElementById('darkModeToggle').checked;
    const isGlass = document.getElementById('glassToggle').checked;

    document.documentElement.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('no-glass', !isGlass);

    localStorage.setItem('quizSettings', JSON.stringify({ isDark, isGlass }));
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('quizSettings')) || { isDark: false, isGlass: true };
    
    const darkInput = document.getElementById('darkModeToggle');
    const glassInput = document.getElementById('glassToggle');

    if (darkInput) darkInput.checked = settings.isDark;
    if (glassInput) glassInput.checked = settings.isGlass;

    document.documentElement.classList.toggle('dark-mode', settings.isDark);
    document.documentElement.classList.toggle('no-glass', !settings.isGlass);
}

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
    const menu = document.getElementById('settingsMenu');
    const btn = document.querySelector('.settings-toggle');
    if (menu && menu.style.display === 'block' && !menu.contains(e.target) && e.target !== btn) {
        menu.style.display = 'none';
    }
});

loadSettings();