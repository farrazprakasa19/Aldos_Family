// ===== MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// ===== HEADER SHRINK ON SCROLL =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > 50);
});

// ===== ACTIVE MENU AUTO =====
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// ===== DARK MODE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
