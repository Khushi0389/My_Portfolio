// Navbar scroll behavior
const header = document.querySelector('.navbar');
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

// Collapse navbar on mobile after clicking a link
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        new bootstrap.Collapse(menuToggle).toggle();
    });
});

// EmailJS form submission and redirect to thankyou.html
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            emailjs.sendForm('service_ricwxlt', 'template_o4lmbuo', this)
                .then(() => {
                    // Redirect to thank you page after successful email send
                    window.location.href = 'thankyou.html';
                }, (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send message. Please try again.');
                });
        });
    }
});
