// STEP ONE!!!!
// Create a button using HTML - Done 
// Create timer function that starts when button is pressed
// Create timer counting down from 75 seconds - DONE - but goes to neg
let startQuiz = document.querySelector("#start-button");
var timeEl = document.querySelector(".timer");
var secondsLeft = 76;
function timer() {
    let timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval();
        }
    }, 1000);
}
// STEP TWO!!!
// When you click the start button, the timer starts and you are presented with a question - Done
// Unhide question - Done
function questionOne() {

    document.getElementById("greeting").add = true;
    document.getElementById("question-pocket1").hidden = false;
}


startQuiz.addEventListener("click", function () {
    timer();

    var questionFirst = document.getElementById("greeting");
    greeting.style.display = "none";
    questionOne();
});

// STEP THREE!!!
// Create list of questions/answers and assign correct
// Create Function that moves onto next question 
// and keeps score if correctly chosen
let correctAnswer = document.getElementById("answerq1");

correctAnswer.addEventListener("click", function () {
    console.log("correct");

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

let incorrectAnswer = document.getElementsByClassName("answers");
incorrectAnswer.addEventListener("click", function () {
    for (var i=0; i<wrong.length; i++ ) {
    incorrectAnswer[i].innerHTML = "incorrect";
    console.log("wrong");
    }
})


// STEP FOUR!!!
// If clock time === 0 . return out of entire quiz and timer function


// STEP FIVE!!!!
// ADD in function that keeps score if answered correctly/incorrectly 
// Saves the score locally
// Create input for initials
// Style scoreboard 


//STEP SIX!!!
// ask if you want to restart game







// Function to create and game over image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}
