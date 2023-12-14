let resultText = document.getElementById('resByName');
resultText.textContent = 'Поздравляем, ' + localStorage.getItem('name') + '!';

function getResult1() {
  return localStorage.getItem('score_level_1');
}

function getResult2() {
  return localStorage.getItem('score_level_2');
}

function getResult3() {
  return localStorage.getItem('score_level_3');
}

function getAllResults() {
  return parseInt(getResult1()) + parseInt(getResult2()) + parseInt(getResult3());
}

document.addEventListener("DOMContentLoaded", function () {
  let allResElement = document.getElementById('sum');
  allResElement.textContent = 'Всего: ' + getAllResults().toString();

  let lvl1Element = document.getElementById('lvl1');
  lvl1Element.textContent = 'Уровень 1: ' + getResult1().toString();

  let lvl2Element = document.getElementById('lvl2');
  lvl2Element.textContent = 'Уровень 2: ' + getResult2().toString();

  let lvl3Element = document.getElementById('lvl3');
  lvl3Element.textContent = 'Уровень 3: ' + getResult3().toString();
});
