// WhatsApp Button Click
document.getElementById('whatsappBtn').addEventListener('click', function() {
  // Yahan apna WhatsApp number dal dein country code ke sath
  // Example: Pakistan 92 + 3001234567
  window.open('https://wa.me/923001234567', '_blank');
});

// Join Button Click
document.getElementById('joinBtn').addEventListener('click', function() {
  alert('Thank you for your interest in SKR-International! Our team will contact you soon.');
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
