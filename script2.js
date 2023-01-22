// STEP ONE!!!!
// Create a button using HTML - Done 
// Create timer function that starts when button is pressed
// Create timer counting down from 75 seconds - DONE - but goes to neg
let startQuiz = document.querySelector("#start-button");
    var timeEl = document.querySelector(".timer");
    var secondsLeft = 76;
    function timer() {
    let timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft + " seconds";
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval();
        }
    },1000);   
    }
// STEP TWO!!!
// When you click the start button, the timer starts and you are presented with a question - Done
// Unhide question - Done
    function questionOne()  {
    
        document.getElementById("greeting").add = true;
        document.getElementById("question-pocket1").hidden = false;
    }


startQuiz.addEventListener("click", function(){
    timer();

    var questionFirst = document.getElementById("greeting");
    greeting.style.display = "none";
        questionOne();
});

// STEP THREE!!!
// Create list of questions/answers and assign correct - Done
// Create Function that moves onto next question 
// and keeps score if correctly chosen
let correctAnswer = document.getElementById("answerq1");

correctAnswer.addEventListener("click", function() {
    console.log("correct");

    function questionTwo() {
        document.getElementById("question-pocket1").hidden = true;
        document.getElementById("question-pocket2").hidden = false;
    }

    var hideQuestion1 = document.getElementById("question-pocket1");
    greeting.style.display = "none";
        questionTwo();
    
})



// STEP FOUR!!!
// if statement
// Question should pop up
// When you answer incorrectly, time is subtracted from the clock
// Create if statement that if incorrect is chosen, subtract 10 seconds from clock
// If clock time === 0 . return out of entire quiz and timer function

// STEP THREE!!!!
// When you answer the question, you are presented with another question
// 



// When all questions are answered or the timer reaches 0, game is over


// Whent the game is over, initials and score is saved







// Function to create and game over image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}
