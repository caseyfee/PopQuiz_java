// When you click the start button, the timer starts and you are presented with a question
      // Add an event listener for the start buttom [In HTML] onclick that starts questions AND TIMER
        // Likely a query selector - on click
      // Create timer function that starts when button is pressed
      // Question should pop up
      

// When you answer the question, you are presented with another question
    // 

// When you answer incorrectly, time is subtracted from the clock

// When all questions are answered or the timer reaches 0, game is over


// Whent the game is over, initials and score is saved




// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 5;

startButton.addEventListener("click", startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till quiz is over.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }
    )}, 1000);


  // function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
    

  //   function rapidQuestions (questions, quizContainer) {


  //   }

  //   function answers (questions, quizContainer, resultsContainer) {

      
  //   }

  // }

  


// Function to end game
  function sendMessage() {
     timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/gameOver.jpeg");
     mainEl.appendChild(imgEl);

// // }
// function begin() {
//   document.getElementById("count");
//   startTimer();
// }

// STEP TWO!!!
// When you click the start button, the timer starts and you are presented with a question
// Unhide questions
var questionContainer = document.querySelector(".question-container");
questionContainer.addEventListener("click", function(event) {
    var element = event.target;

    if(element.matches("#start-button")){
        var state = element.getAttribute("data-state");

        if(state ==="hidden") {
            // element.textContent = element.dataset.number;
            element.dataset.state="visible";
        } else {
            element.textContent="";
            element.setAttribute("data-state", "hidden")
        }
    }


});
