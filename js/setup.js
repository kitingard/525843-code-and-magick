'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (min, max) {
  return (Math.round(Math.random() * (max - min) + min));
};

var wizards = [];
var WIZARDS_QUANTITY = 4;

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  wizards[i] = {
    name: names[getRandom(0, (names.length - 1))] + ' ' + surnames[getRandom(0, (surnames.length - 1))],
    coatColor: coatColors[getRandom(0, (coatColors.length - 1))],
    eyesColor: eyesColors[getRandom(0, (eyesColors.length - 1))]
  };
};

var similarWizardElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarWizardElement.appendChild(wizardElement);
};

document.querySelector('.setup-similar').classList.remove('hidden');

