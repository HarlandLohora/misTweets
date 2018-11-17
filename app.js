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
  newTweet.classList.add('noMostrar');
}
