const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const name = form.elements['name'];
  const email = form.elements['email'];
  const phone = form.elements['phone'];
  const age = form.elements['age'];
  const message = form.elements['message'];

  const nameErr = document.getElementById('name-error');
  const emailErr = document.getElementById('email-error');
  const phoneErr = document.getElementById('phone-error');
  const messageErr = document.getElementById('message-error');

  if (!/^[A-Za-z ]{3,}$/.test(name.value.trim())) {
    name.classList.add('invalid');
    name.classList.remove('valid');
    nameErr.style.display = 'block';
    isValid = false;
  } else {
    name.classList.remove('invalid');
    name.classList.add('valid');
    nameErr.style.display = 'none';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('invalid');
    email.classList.remove('valid');
    emailErr.style.display = 'block';
    isValid = false;
  } else {
    email.classList.remove('invalid');
    email.classList.add('valid');
    emailErr.style.display = 'none';
  }

  const phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add('invalid');
    phone.classList.remove('valid');
    phoneErr.style.display = 'block';
    isValid = false;
  } else {
    phone.classList.remove('invalid');
    phone.classList.add('valid');
    phoneErr.style.display = 'none';
  }

  if (message.value.trim().length < 10) {
    message.classList.add('invalid');
    message.classList.remove('valid');
    messageErr.style.display = 'block';
    isValid = false;
  } else {
    message.classList.remove('invalid');
    message.classList.add('valid');
    messageErr.style.display = 'none';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();

    [name, email, phone, message].forEach(input => {
      input.classList.remove('valid');
    });
  } else {
    alert('Please fix the highlighted fields.');
  }
});
