// Portfolio - 최준영 | Agent Coding Tech Leader

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');

    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    document.querySelector('.theme-toggle').textContent = '☀️';
}

// Remove will-change after intro animations complete
document.addEventListener('DOMContentLoaded', () => {
    const introElements = document.querySelectorAll('.intro-title, .intro-name, .intro-box, .intro-bottom');
    introElements.forEach(el => {
        el.addEventListener('animationend', () => {
            el.style.willChange = 'auto';
        }, { once: true });
    });
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.scrollY > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Fade In Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
