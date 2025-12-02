// 1. MOBILE MENU TOGGLE
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    
    // Accessibility: Update aria-expanded
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    
    // Change Icon: X vs Hamburger
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
  });
}

// Close Menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuButton.innerHTML = '☰';
      menuButton.setAttribute('aria-expanded', false);
    }
  });
});

// 2. FORM VALIDATION
const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset message style
    messageDiv.style.marginTop = "1rem";
    messageDiv.style.fontWeight = "bold";

    if (!name || !email || !message) {
      messageDiv.textContent = "Please fill out all fields before sending.";
      messageDiv.style.color = "red";
    } else {
      messageDiv.textContent = "Thank you! Your message has been sent.";
      messageDiv.style.color = "green";
      contactForm.reset(); // Clear the form
    }
  });
}