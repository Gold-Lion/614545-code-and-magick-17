'use strict';

var CLOUD_X1 = 100;
var CLOUD_X2 = 300;
var CLOUD_X3 = 520;
var CLOUD_X4 = 490;
var CLOUD_X5 = 520;
var CLOUD_X6 = 300;
var CLOUD_X7 = 100;
var CLOUD_X8 = 130;

var CLOUD_Y1 = 10;
var CLOUD_Y2 = 20;
var CLOUD_Y3 = 10;
var CLOUD_Y4 = 140;
var CLOUD_Y5 = 280;
var CLOUD_Y6 = 270;
var CLOUD_Y7 = 280;
var CLOUD_Y8 = 140;

var GAP = 10;
var TEXT_X = 170;
var TEXT_Y = 250;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_Y = 90;

var renderCloud = function (ctx, x1, y1,
    x2, y2,
    x3, y3,
    x4, y4,
    x5, y5,
    x6, y6,
    x7, y7,
    x8, y8,
    color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x5, y5);
  ctx.lineTo(x6, y6);
  ctx.lineTo(x7, y7);
  ctx.lineTo(x8, y8);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X1 + GAP, CLOUD_Y1 + GAP, CLOUD_X2 + GAP, CLOUD_Y2 + GAP, CLOUD_X3 + GAP, CLOUD_Y3 + GAP, CLOUD_X4 + GAP, CLOUD_Y4 + GAP, CLOUD_X5 + GAP, CLOUD_Y5 + GAP, CLOUD_X6 + GAP, CLOUD_Y6 + GAP, CLOUD_X7 + GAP, CLOUD_Y7 + GAP, CLOUD_X8 + GAP, CLOUD_Y8 + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X1, CLOUD_Y1, CLOUD_X2, CLOUD_Y2, CLOUD_X3, CLOUD_Y3, CLOUD_X4, CLOUD_Y4, CLOUD_X5, CLOUD_Y5, CLOUD_X6, CLOUD_Y6, CLOUD_X7, CLOUD_Y7, CLOUD_X8, CLOUD_Y8, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
      ctx.fillText(players[i], TEXT_X + (BAR_WIDTH * 2) * i, TEXT_Y);
      ctx.fillRect(TEXT_X + (BAR_WIDTH * 2) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
      ctx.fillText(players[i], TEXT_X + (BAR_WIDTH * 2) * i, TEXT_Y);
      ctx.fillRect(TEXT_X + (BAR_WIDTH * 2) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  }

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'Black';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);
};
