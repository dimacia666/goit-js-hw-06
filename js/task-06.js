const validationInput = document.getElementById('validation-input');

    function updateValidationClass(isValid) {
      validationInput.classList.remove(isValid ? 'invalid' : 'valid');
      validationInput.classList.add(isValid ? 'valid' : 'invalid');
    }

    validationInput.addEventListener('blur', () => {
      const expectedLength = parseInt(validationInput.getAttribute('data-length'));
      const inputValue = validationInput.value.trim();
      const isValid = inputValue.length === expectedLength;
      updateValidationClass(isValid);
    });