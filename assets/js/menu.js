let textInput = document.getElementById('name');

textInput.addEventListener('input', function () {
  let nameInput = this.value.trim();
  let startButton = document.getElementById('startButton');
  let startLink = document.getElementById('startLink');

  if (nameInput !== '') {
    startButton.removeAttribute('disabled');
    startLink.href = 'pages/levels.html';
  } else {
    startButton.setAttribute('disabled', 'true');
    startLink.removeAttribute('href');
  }
});

document.getElementById('startButton').addEventListener('click', function () {
  let textArea = document.getElementById('name');
  localStorage.clear();
  localStorage.setItem('name', textInput.value);
  localStorage.setItem('current_level', '1');
  textArea.value = '';
});
