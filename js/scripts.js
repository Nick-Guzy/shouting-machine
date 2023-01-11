window.onload = function() {
  setButtonHandler();
  document.querySelector('#input-area input').onclick = function() {
    document.getElementById('output-area').classList.add('hidden');
  }
}

function setButtonHandler() {
  document.querySelector('#input-area > form').onsubmit = function(event) {
    let userSentence = document.querySelector('#input-area input').value;
    document.getElementById('output-area').innerText = userSentence.toUpperCase();
    document.getElementById('output-area').classList.remove('hidden');
    event.preventDefault();
  }
}

