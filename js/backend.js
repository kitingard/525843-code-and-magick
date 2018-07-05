'use strict';

(function () {
  var POST_URL = 'https://js.dump.academy/code-and-magick';
  var GET_URL = 'https://js.dump.academy/code-and-magick/data';
  var setupFooter = document.querySelector('.setup-footer');


  var onError = function (message) {
    var div = document.createElement('div');
    div.innerHTML = message;
    div.style.textAlign = 'center';
    div.style.color = 'white';
    div.style.backgroundColor = 'red';
    div.style.border = '2px solid white';

    setupFooter.insertBefore(div, setupFooter.children[1]);

    setTimeout(function () {
      div.parentNode.removeChild(div);
    }, 10000);
  };

  window.save = function (data, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 400:
          onError('Неверный запрос');
          break;
        case 401:
          onError('Пользователь не авторизован');
          break;
        case 404:
          onError('Ничего не найдено');
          break;

        default:
          onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 3000;

    xhr.open('POST', POST_URL);
    xhr.send(data);
  };

  window.load = function (onLoad) {
    var xhrLoad = new XMLHttpRequest();
    xhrLoad.responseType = 'json';

    xhrLoad.open('GET', GET_URL);

    xhrLoad.addEventListener('load', function () {
      switch (xhrLoad.status) {
        case 200:
          onLoad(xhrLoad.response);
          break;

        case 400:
          onError('Неверный запрос');
          break;
        case 401:
          onError('Пользователь не авторизован');
          break;
        case 404:
          onError('Ничего не найдено');
          break;

        default:
          onError('Cтатус ответа: : ' + xhrLoad.status + ' ' + xhrLoad.statusText);
      }
    });
    xhrLoad.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhrLoad.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhrLoad.timeout + 'мс');
    });

    xhrLoad.timeout = 3000;
    xhrLoad.send();
  };

})();
