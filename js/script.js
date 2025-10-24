// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Contact Form Validation and Anti-Spam
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const spamCheck = document.getElementById('spamCheck').value;
    if (this.checkValidity() && spamCheck === '4') {
      document.getElementById('contactSuccess').style.display = 'block';
      document.getElementById('contactError').style.display = 'none';
      this.reset();
    } else {
      document.getElementById('contactError').style.display = 'block';
      document.getElementById('contactSuccess').style.display = 'none';
    }
    this.classList.add('was-validated');
  });
}

// Registration Form Validation
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmFeedback = document.getElementById('confirmPassword').nextElementSibling;
    if (password !== confirmPassword) {
      confirmFeedback.textContent = 'Passwords do not match.';
      document.getElementById('confirmPassword').classList.add('is-invalid');
    } else {
      document.getElementById('confirmPassword').classList.remove('is-invalid');
    }
    if (this.checkValidity() && password === confirmPassword) {
      document.getElementById('regSuccess').style.display = 'block';
      this.reset();
    }
    this.classList.add('was-validated');
  });
}

// Progressive enhancement: forms work without JS, but validation is client-side only