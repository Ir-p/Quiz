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

function startQuiz() {
  // hide start screen
  var startScreenEl = document.querySelector("#start-screen")
  startScreenEl.style.display = "none"
  // un-hide questions section
  questionsEl.classList.remove("hide");
  // start timer
    // set interval to call clockTick every second
    timerId = setInterval(clockTick,1000);
  
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML=""
  
  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class","choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceBtn.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceBtn);
  });
}

function questionClick(event) {
  // check if the answer is wrong
  if (this.value !==questions[currentQuestionIndex].answer) {

    // penalize time
    time -= 5;

    if(time <0) {
      time = 0;
    }
    // display new time on page
    timerEl.textContent = time;
    // play "wrong" sound effect
    sfxWrong.play();

    feedbackEl.textContent = "Wrong!";

  }else {
    // play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent= "Correct!"
  }
  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feeback");
  setTimeout(function(){
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex += 1

  // check if we've run out of questions
  if (currentQuestionIndex>questions.length-1) {
    // quizEnd
    quizEnd()

  // else
  } else {
    // getQuestion
    getQuestion()
  }
   
}  


function quizEnd() {
  // stop timer
  clearInterval(timerId)
  // show end screen
  var endScreen = document.getElementById("end-screen");
  endScreen.removeAttribute("class")
  // show final score
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time
  // hide questions section
  questionsEl.setAttribute("class", "hide");
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
  var initials = initialsEl.value.trim()
  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var userScore = JSON.parse(window.localStorage.getItem("userScore"))
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    }
  }
    // save to localstorage
    userScore.push(newScore)
    window.localStorage.setItem("userScore", JSON.stringify(userScore));
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
