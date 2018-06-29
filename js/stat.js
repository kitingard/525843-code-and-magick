'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var TEXT_GAP = 30;
  var FONT_GAP = 15;
  var RECT_GAP = 50;
  var BAR_WIDTH = 40;
  var TIMES_GAP = 80;
  var NAMES_GAP = 260;
  var BAR_GAP = 245;
  var barHeight = 150;

  var getRandomColor = function (min, max) {
    return (Math.random() * (max - min) + min);
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + FONT_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + ((RECT_GAP + BAR_WIDTH) * i) + RECT_GAP, TIMES_GAP);
      ctx.fillText(names[i], CLOUD_X + ((RECT_GAP + BAR_WIDTH) * i) + RECT_GAP, NAMES_GAP);
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomColor(0.1, 1.1) + ')';
      }
      ctx.fillRect(CLOUD_X + ((RECT_GAP + BAR_WIDTH) * i) + RECT_GAP, BAR_GAP, BAR_WIDTH, -(barHeight * Math.floor(times[i]) / maxTime));
    }
  };
})();
