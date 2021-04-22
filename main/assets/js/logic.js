////VARS:

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

////FUNCTION DEFINITIONS:

function startQuiz() {
  // hide start screen
  var startScreenEl = document.querySelector("#start-screen")
  startScreenEl.style.display = "none"
  // un-hide questions section
  console.log(questionsEl)
  questionsEl.style.display = "block"
  // start timer
    // set interval to call clockTick every second
    timerId = setInterval(clockTick,1000);
  
  getQuestion();
}

function getQuestion() {
  var questionTitle = questionsEl.getElementsByTagName("h2");
  console.log(questionTitle)
  // get current question object from array
  console.log(questions[currentQuestionIndex])
  // update title with current question

  // clear out any old question choices

  // loop over choices

    // create new button for each choice

    // attach click event listener to each choice

    // display on the page
}

function questionClick() {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // play "wrong" sound effect

  // else 
    // play "right" sound effect


  // flash right/wrong feedback on page for half a second

  // move to next question

  // check if we've run out of questions
    // quizEnd
  // else 
    // getQuestion
}

function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time
  time-- ;
  // show starting time
  //   assign the time var to time span text Content
  timerEl.textContent = time;

  // check if user ran out of time
  if(time <= 0) {
    clearInterval(timerId);
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}
////FUNCTION CALL:

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
