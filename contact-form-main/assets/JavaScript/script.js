// script.js

const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data); // Ver los datos ingresados en la consola

  try {
    // Intentar enviar los datos (en este caso, solo mostramos en consola)
    console.log('Form submitted successfully!');
    responseMessage.innerHTML = 'Form submitted successfully!';
    responseMessage.style.color = 'green';
  } catch (error) {
    console.error('Error submitting form:', error);
    responseMessage.innerHTML = 'Error submitting form!';
    responseMessage.style.color = 'ed';
  }
});