document.querySelector('.get-jokes').addEventListener('click', getJokes);
document.querySelector('.clear-jokes').addEventListener('click', clearJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;


  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output +=
          `<li class="list-group-item">${joke.joke}</li>`;
        });
      } else {
        output += '<li class="list-group-item">Something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();

  e.preventDefault();
};

//Remove Joke
function clearJokes() {
  document.getElementById('#number').innerHTML = '';
};

