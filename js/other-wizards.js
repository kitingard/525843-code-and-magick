'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;
  var similarWizardElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var onSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (window.i = 0; window.i < WIZARDS_QUANTITY; window.i++) {
      fragment.appendChild(renderWizard(wizards[window.i]));
    }
    similarWizardElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.load(onSuccess);

})();
