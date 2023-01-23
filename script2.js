var score = "";
var secondsLeft = 6;
var currentPocket = 0;

// Dom elements

const choiceAlert = document.getElementById("choiceAlert");
const startQuiz = document.querySelector("#start-button");
const timeEl = document.querySelector(".timer");
const questionFirst = document.getElementById("greeting");
const hideQuestion1 = document.getElementById("question-pocket1");
const pocket = document.querySelectorAll(".pocket");


// STEP ONE!!!!
// Create a button using HTML; Create timer function that starts when button is pressed; Create timer counting down from 75 seconds;Exit quiz and go to scoreboard

// document.getElementById("greeting").hidden = false;

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
?

// STEP THREE!!!
// Create list of questions/answers and assign correct or incorrect; create a function that moves onto the next question;
// Create Function that keeps score if correctly chosen    

                // let correctAnswerOne = document.getElementById("answerq1");

                //     if (correctAnswerOne.addEventListener("click", function () {
                //         console.log("correct");
                //         document.getElementById("choiceAlert").hidden = false;
                //         choiceAlert.textContent = "Correct!";
                //         // choiceAlert.style.display = "none";

                //     }) else {
                //         // Move onto next question
                //         function questionTwo() {
                //             document.getElementById("question-pocket1").hidden = true;
                //             document.getElementById("question-pocket2").hidden = false;
                //         }

                //         greeting.style.display = "none";
                //         questionTwo();
                //     })

for (var i=0; i<pocket.length; i++) {
    var answerChoices=pocket[i].querySelectorAll(".answer");
    for(var j=0; j<answerChoices.length; j++) {
        answerChoices[j].addEventListener("click", function(){
            if (this.id==="theAnswer"){
                score++;
                // and move to next page
                return;
            }
            pocket[currentPocket].style.display = "none";
            currentPocket++;
            pocket[currentPocket].style.hidden = "false";
            if (currentPocket === 3) {
                document.getElementById("greeting").hidden = true;
                document.getElementById("question-pocket1").hidden = true;
                document.getElementById("question-pocket2").hidden = true;
                document.getElementById("scoreboard").hidden = false;
            }
        })
        } 
    }

// Assign incorrect answers and write function that lets user know it's wrong
// subtracts 10 seconds from timer if incorrect
// and moves onto next question

// let incorrectAnswer = document.getElementsByClassName("wrong");

// incorrectAnswer.addEventListener("click", function () {
//     console.log("wrong");
//     secondsLeft = secondsLeft - 10;
//     })


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
    
