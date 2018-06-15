'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
var userNameInput = document.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var MIN_ELEMENT = 0;


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (userNameInput === evt.target) {
      evt.stopPropagation();
    } else {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});


var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandom = function (min, max) {
  return (Math.round(Math.random() * (max - min) + min));
};

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var setupColorInputs = document.querySelectorAll('.setup-player input');

var getCoatColor = function () {
  wizardCoat.style.fill = coatColors[getRandom(MIN_ELEMENT, (coatColors.length - 1))];
  setupColorInputs[0].value = wizardCoat.style.fill;
};

var getEyesColor = function () {
  wizardEyes.style.fill = eyesColors[getRandom(MIN_ELEMENT, (eyesColors.length - 1))];
  setupColorInputs[1].value = wizardEyes.style.fill;
};

var getFireballColor = function () {
  var fireballColor = fireballColors[getRandom(MIN_ELEMENT, (fireballColors.length - 1))];
  fireball.style.backgroundColor = fireballColor;
  setupColorInputs[2].value = fireballColor;
};

wizardCoat.addEventListener('click', function () {
  getCoatColor();
});

wizardEyes.addEventListener('click', function () {
  getEyesColor();
});

fireball.addEventListener('click', function () {
  getFireballColor();
});

var wizards = [];
var WIZARDS_QUANTITY = 4;

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  wizards[i] = {
    name: names[getRandom(MIN_ELEMENT, (names.length - 1))] + ' ' + surnames[getRandom(MIN_ELEMENT, (surnames.length - 1))],
    coatColor: coatColors[getRandom(MIN_ELEMENT, (coatColors.length - 1))],
    eyesColor: eyesColors[getRandom(MIN_ELEMENT, (eyesColors.length - 1))]
  };
}

var similarWizardElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarWizardElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');
