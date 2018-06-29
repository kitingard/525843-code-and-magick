'use strict';

(function () {
  window.userNameInput = document.querySelector('.setup-user-name');

  window.userNameInput.addEventListener('invalid', function () {
    if (window.userNameInput.validity.tooShort) {
      window.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (window.userNameInput.validity.tooLong) {
      window.userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (window.userNameInput.validity.valueMissing) {
      window.userNameInput.setCustomValidity('Обязательное поле');
    } else {
      window.userNameInput.setCustomValidity('');
    }
  });
})();
