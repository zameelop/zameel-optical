// script.js

// FAQ Accordion
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        const answer = faq.querySelector('.answer');
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing, ${email}!`);
    newsletterForm.reset();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Product Interactions
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('click', () => {
        alert(`Product: ${product.dataset.name}`);
    });
});
