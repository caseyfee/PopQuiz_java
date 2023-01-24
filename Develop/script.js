var score = "";
var secondsLeft = 26;
var currentQuestionIndex = 0;
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

     // Question 3

     {
        question: 'What percent of bees are female in a hive?',
        multipleChoices: ['50%', '1%', '75%', '90%'],
        answer: '90%'
    },
    // Question 4

    {
        question: 'What is a bees favorite sport?',
        multipleChoices: ['soccer', 'football', 'rug-bee', 'swimming'],
        answer: 'rug-bee'
    },
]

// Dom elements
var startQuiz = document.querySelector("#start-button");
var timeEl = document.querySelector(".timer");
var userChoice = document.querySelectorAll("answer");
var quizEL = document.getElementById("quiz");
var multipleChoicesEl = document.getElementById("multipleChoices");
var startOver = document.getElementById("startOver");
var scoreEl = document.getElementById("totalScore");
var submitScore = document.getElementById("submit-score");
var feedback = document.getElementById("answerFeedback");

document.getElementById("scoreboard").hidden = true;

// Start Button
function timer() {
    var timeInterval = setInterval(function () {
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
        
// Start Quiz
function userScreen() {
    
    var currentQuestion = questionLIst[currentQuestionIndex];
  
    var questionsEl = document.getElementById("questionSpot");
    document.getElementById("greeting").hidden = true;

    if(currentQuestionIndex===questionLIst.length) {
        secondsLeft ===0;
        scoreboard();
        
    }
    else {
        questionsEl.textContent = currentQuestion.question;  
        console.log(currentQuestion.question);
        console.log(currentQuestion.multipleChoices);
    
        multipleChoicesEl.innerHTML = "";
    
        currentQuestion.multipleChoices.forEach(function (multipleChoicesEl,i) {
            var multipleChoicesBtn = document.createElement("button");
            multipleChoicesBtn.setAttribute("class", "mulipleChoices");
            multipleChoicesBtn.setAttribute("value", multipleChoicesEl);
    
            multipleChoicesBtn.textContent = multipleChoicesEl;
    
            multipleChoicesBtn.onclick=choiceCheck;
            multipleChoices.appendChild(multipleChoicesBtn);
    })    
    }
    
        
}  
    function choiceCheck() {
        if (secondsLeft<=0){
            secondsLeft === 0;
            scoreboard();
        }
            if (this.value !== questionLIst[currentQuestionIndex].answer) {
                feedback.textContent = "Wrong - Correct answer is: " + questionLIst[currentQuestionIndex].answer;
                currentQuestionIndex++;
                secondsLeft-=5;
                userScreen();
                
            }
            else {
                score ++;
                currentQuestionIndex++;
                userScreen();
            }
        
        }       


function scoreboard() {
    document.getElementById("scoreboard").hidden = false;
    document.getElementById("greeting").hidden = true;
    document.getElementById("quiz").hidden = true;
    
    scoreEl.textContent = "Score: " + score;

    submitScore.addEventListener("click", function() {
        highScore();
    })

    startOver.addEventListener("click", function () {
        document.location.reload();
    })

    var userInitials = document.querySelector("#initials")  

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

    
