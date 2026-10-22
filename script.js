const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]')?.value?.trim() || 'there';

    status.textContent = `Thanks, ${name}! Your inquiry has been received. We will get back to you shortly.`;
    form.reset();
  });
}
