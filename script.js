const jokeContainer =  document.getElementById('joke');
const jokeBtn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke  = () =>{
    jokeContainer.classList.remove("fade")
  fetch(url)
 .then(response => response.json())
 .then(item => {
    jokeContainer.textContent = `${item.joke}`;
    jokeContainer.classList.add("fade")
 })
 .catch(error => console.error('Error:', error));
}

jokeBtn.addEventListener('click', getJoke);
getJoke()