console.log("JS file loaded!");

// Update footer dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Close menu when clicking a link (mobile UX)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.textContent = '☰';
    });
});