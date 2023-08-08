const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы
  
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    
    console.log(formData); // Выводим обьект с данными в консоль
    loginForm.reset(); // Очищаем значения полей формы
  }
});

