function toggleTheme() {
    var body = document.body;
    var themeIcon = document.getElementById('themeIcon');
    var logoImage = document.getElementById('logoImage');

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('bi-moon-stars-fill', 'bi-brightness-high-fill');
        logoImage.src = 'LogoDark.png';
    } else {
        themeIcon.classList.replace('bi-brightness-high-fill', 'bi-moon-stars-fill');
        logoImage.src = 'Logo.svg';
    }

    console.log('Logo Image source:', logoImage.src);

    saveThemePreference();
}


document.addEventListener('DOMContentLoaded', function () {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateThemeIcon();
    }
});

function saveThemePreference() {
    var theme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
}


function updateThemeIcon() {
    var themeIcon = document.getElementById('themeIcon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('bi-moon-stars-fill', 'bi-brightness-high-fill');
    } else {
        themeIcon.classList.replace('bi-brightness-high-fill', 'bi-moon-stars-fill');
    }
}

window.addEventListener('beforeunload', saveThemePreference);
