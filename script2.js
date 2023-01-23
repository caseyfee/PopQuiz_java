
var score = "";
var secondsLeft = 13;

let choiceAlert = document.getElementById("choiceAlert");

// STEP ONE!!!!
// Create a button using HTML; Create timer function that starts when button is pressed; Create timer counting down from 75 seconds;Exit quiz and go to scoreboard
let startQuiz = document.querySelector("#start-button");
var timeEl = document.querySelector(".timer");

document.getElementById("greeting").hidden = false;
document.get

function timer() {
    let timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            console.log("game over");
            clearInterval(timeInterval);
            document.getElementById("greeting").hidden = true;
            document.getElementById("question-pocket1").hidden = true;
            document.getElementById("question-pocket2").hidden = true;
            document.getElementById("scoreboard").hidden = false;
        }
       
    }, 1000);
}
// STEP TWO!!!
// When you click the start button, the timer starts and you are presented with question 1
function questionOne() {

    document.getElementById("greeting").hidden = true;
    document.getElementById("question-pocket1").hidden = false;
}

startQuiz.addEventListener("click", function () {
    timer();

    var questionFirst = document.getElementById("greeting");
    greeting.style.display = "none";
    questionOne();
});

// STEP THREE!!!
// Create list of questions/answers and assign correct or incorrect; create a function that moves onto the next question;
// Create Function that keeps score if correctly chosen
let correctAnswerOne = document.getElementById("answerq1");

correctAnswerOne.addEventListener("click", function () {
    console.log("correct");
    document.getElementById("choiceAlert").hidden = false;
    choiceAlert.textContent = "Correct!";
    choiceAlert.style.display = "none";

    // Move onto next question
    function questionTwo() {
        document.getElementById("question-pocket1").hidden = true;
        document.getElementById("question-pocket2").hidden = false;
    }

    var hideQuestion1 = document.getElementById("question-pocket1");
    greeting.style.display = "none";
    questionTwo();

})

// Assign incorrect answers and write function that lets user know it's wrong
// subtracts 10 seconds from timer if incorrect
// and moves onto next question

let incorrectAnswer = document.getElementsByClassName("wrong");

incorrectAnswer.addEventListener("click", function () {
    console.log("wrong");
    secondsLeft = secondsLeft - 10;
    })


// STEP FIVE!!!!
// ADD in function that keeps score if answered correctly/incorrectly 
// Saves the score locally
// Create input for initials
// Style scoreboard 



//STEP SIX!!!
// Ask if you want to restart game and start from beginning
let startOver = document.getElementById("startOver");
startOver.addEventListener("click", function () {
    console.log("starting over!");
    document.getElementById("question-pocket1").hidden = true;
    document.getElementById("question-pocket2").hidden = true;
    document.getElementById("scoreboard").hidden = true;
    document.getElementById("greeting").hidden = false;
})
    
