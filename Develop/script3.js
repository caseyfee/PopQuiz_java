var score = "";
var secondsLeft = 202;
var currentPocket = 0;
const currentQuestionIndex = 0;
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
var startQuiz = document.querySelector("#start-button");
var timeEl = document.querySelector(".timer");
var userChoice = document.querySelectorAll("answer");
var quizEL = document.getElementById("quiz");
var mulipleChoices = document.getElementById("multipleChoices");

// Start Button
function timer() {
    let timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            console.log("game over");
            clearInterval(timeInterval);
            scoreboard(); 
        }
    }, 1000);
} 

    startQuiz.addEventListener("click", function () {
                timer();
                document.getElementById("greeting").style.visibility='hidden';
                userScreen();
            });
        // }
// Start Quiz
seenScreenEl = document.getElementById("seenScreen");

function userScreen() {
    
    var currentQuestion = questionLIst[currentQuestionIndex];
  
    var questionsEl = document.getElementById("questionSpot");
    seenScreenEl.innerHTML = "";
    questionsEl.textContent = currentQuestion.question;  
    console.log(currentQuestion.question);
    console.log(currentQuestion.multipleChoices);

    currentQuestion.multipleChoices.forEach(function (multipleChoices,i) {
        var multipleChoicesBtn = document.createElement("button");
        multipleChoicesBtn.setAttribute("class", "mulipleChoices");
        multipleChoicesBtn.setAttribute("value", multipleChoices);

        multipleChoicesBtn.textContent = i +1+ ". "+multipleChoices;

        multipleChoicesBtn.onclick=choiceCheck;
        mulipleChoices.appendChild(multipleChoicesBtn);
    })
    }

    function choiceCheck() {
        if (this.value !== questionLIst[currentQuestion].answer)
            secondsLeft-=10;
        
            if(time<=0){
                // scoreboard();
            }
        else {
            score ++;
        }
    }
    

function scoreboard() {
    const userInitials = document.querySelector("#initials")
    var showScorebard = document.getElementsByClassName[0]("scoreboard");
    showScorebard.classList.remove("hidden");

    }
// function highScore(event) {
//     var initials = initialsEl.value.trim();
//         if(initials !=="") {
//             var highScores =
//             JSON.parse(window.localStorage.getItem("highscores")) || [];
//             var newScore = {
//                 score: time,
//                 initials : initials
//             };
//         }
// }      
//             // Saves information to localStorage
//                 highscores.push(newScore);
//                 window.localStorage.setItem("highscores", JSON.stringify(highscores));
//                 // Takes user into highscore page
//                 window.location.href = "/score.html";
            



// function checkForEnter(event) {
//     if(event.key === "Enter") {
//         saveHighscore();
//     }}

    
//     initialsEL.onkeyup = checkForEnter;
    // document.getElementById("greeting").hidden = true;
    //     document.getElementById("questions-pocket1").hidden = true;
    //     document.getElementById("question-pocket2").hidden = true;
    //     document.getElementById("scoreboard").hidden = false;
            
// }