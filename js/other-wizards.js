'use strict';

(function () {
  var wizards = [];
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_QUANTITY = 4;
  var similarWizardElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    wizards[i] = {
      name: names[window.getRandom(window.MIN_ELEMENT, (names.length - 1))] + ' ' + surnames[window.getRandom(window.MIN_ELEMENT, (surnames.length - 1))],
      coatColor: window.coatColors[window.getRandom(window.MIN_ELEMENT, (window.coatColors.length - 1))],
      eyesColor: window.eyesColors[window.getRandom(window.MIN_ELEMENT, (window.eyesColors.length - 1))]
    };
  }

  for (i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarWizardElement.appendChild(wizardElement);
  }

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
