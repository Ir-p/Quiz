
 var scoreDisplay = document.getElementById('highscores');
 function printHighscores() {
  // either get scores from localstorage or set to empty array
  var storedScores = JSON.parse(localStorage.getItem("userScore"));
  var initials = storedScores[0].initials;
  var score = storedScores[0].score;
 
  var listEl = document.createElement('li');

  listEl.setAttribute('id','initalsScore');
  scoreDisplay.append(listEl);
  document.getElementById('initalsScore').textContent = initials + ": " + score;
}
  // This is a helper function that will render todos to the DOM
  // (optional) sort highscores by score property in descending order

   
 // for each score

  // function scoresforEach(item, index) {
  //   document.getElementById("highscores").innerHTML += index + ":" +item +"<br>";
  // }
    // create li tag for each high score
//     var li = document.createElement("li");
//     li.textContent = scores;
//     console.log (li)
//   scoresforEach()
// };
    
    // // display on page
    // var ol = document.getElementsByTagName(ol)
    // ol.appendChild(li)


  printHighscores()

function clearHighscores() {
  // (and reload)
}

// attache clear event to clear score button

// run printhighscore when page loads;
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearHighscores);
function clearHighscores() {
  scoreDisplay.remove();
}