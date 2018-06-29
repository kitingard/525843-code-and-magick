'use strict';

(function () {
  window.coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  window.MIN_ELEMENT = 0;

  window.getRandom = function (min, max) {
    return (Math.round(Math.random() * (max - min) + min));
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var setupColorInputs = document.querySelectorAll('.setup-player input');

  var getCoatColor = function () {
    wizardCoat.style.fill = window.coatColors[window.getRandom(window.MIN_ELEMENT, (window.coatColors.length - 1))];
    setupColorInputs[0].value = wizardCoat.style.fill;
  };

  var getEyesColor = function () {
    wizardEyes.style.fill = window.eyesColors[window.getRandom(window.MIN_ELEMENT, (window.eyesColors.length - 1))];
    setupColorInputs[1].value = wizardEyes.style.fill;
  };

  var getFireballColor = function () {
    var fireballColor = fireballColors[window.getRandom(window.MIN_ELEMENT, (fireballColors.length - 1))];
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
})();
