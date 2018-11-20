//Variables
// const allTweets = document.getElementById('tweets');


//Event Listeners

eventListeners();
function eventListeners(){

}

//Funciones

function tweet(){
  let newTweet = document.getElementById('modalTweet');
  newTweet.classList.remove('noMostrar');
}

function closeModal(){
  let newTweet = document.getElementById('modalTweet');
  let message = document.getElementById('message').value;
  newTweet.classList.add('noMostrar');
  message = '';
}

function newTweet(){
  let tweets      = document.getElementById('tweets');
  let message     = document.getElementById('message').value;
  let tweet       = document.createElement('li');
  let totalTweets = document.getElementById('numTweets');
  tweet.classList.add('Tweets');
  tweet.innerText = message;
  let numTweets   = document.getElementsByClassName('Tweets');
  totalTweets.innerText = (numTweets.length)+1;
  tweets.appendChild(tweet);
  closeModal();
}
