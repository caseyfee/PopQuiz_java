var score = "";
var secondsLeft = 16;
var currentPocket = 0;
var questionLIst = [
    // Question 1

    {
        question: 'How many miles can a bee fly?',
        multipleChoices: ['6 miles', '1 mile', '100 miles', '10 miles'],
        answer: '6 miles'
    },

    // Question 2

    {
        question: 'About how many bees are in a hive?',
        multipleChoices: ['1,000', '500,000', '10,000', '70,000'],
        answer: '70,000'
    },

]

// Dom elements
const startQuiz = document.querySelector("#start-button");
const timeEl = document.querySelector(".timer");
const userChoice = document.querySelectorAll("answer");

// Start Button
function timer() {
    let timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            console.log("game over");
            clearInterval(timeInterval);
            // scoreboard(); 
        }
    }, 1000);
}

startQuiz.addEventListener("click", function () {
                timer();
                // greeting.style.display = "none";
                userScreen();
            });

// Start Quiz
seenScreenEl = document.getElementById("seenScreen");

function userScreen(currentPocket) {
    // start quiz
    seenScreenEl.innerHTML = ""

    for(var i=0; i<questionLIst.length; i++) {
        var currentQuestion = questionLIst[currentQuestion].question;
        var currentMultiChoices = questionLIst[currentQuestion].multipleChoices;
        seenScreenEl.textContent = currentQuestion;
        seenScreenEl.textContent = currentMultiChoices;


    }

        // userChoice.addEventListener("click", function(e){
        //     console.log(e);
        //     score++;
}


// Answers
// function answerQuestions(e)
//     console.log(e);


// function scoreboard() {
//     document.getElementById("greeting").hidden = true;
//             document.getElementById("question-pocket1").hidden = true;
//             document.getElementById("question-pocket2").hidden = true;
//             document.getElementById("scoreboard").hidden = false;
            
// }