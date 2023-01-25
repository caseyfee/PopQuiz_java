var score = 0;
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
var highScoreEl = document.getElementById("highScore");
var greetingEl = document.getElementById("greeting");
var scoreboardEl = document.getElementById("scoreboard")
var highScoreList = document.getElementById("highScoreList");



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

// Start Quiz
startQuiz.addEventListener("click", function () {
    timer();
    greetingEl.classList.add("hide");
    quizEL.classList.remove("hide");
    userScreen();
});

// Rotating Questions
function userScreen() {

    var currentQuestion = questionLIst[currentQuestionIndex];

    var questionsEl = document.getElementById("questionSpot");
    greetingEl.classList.add("hide");

    if (currentQuestionIndex === questionLIst.length) {
        secondsLeft === 0;
        scoreboard();

    }
    else {
        questionsEl.textContent = currentQuestion.question;
        console.log(currentQuestion.question);
        console.log(currentQuestion.multipleChoices);

        multipleChoicesEl.innerHTML = "";

        currentQuestion.multipleChoices.forEach(function (multipleChoicesEl, i) {
            var multipleChoicesBtn = document.createElement("button");
            multipleChoicesBtn.setAttribute("class", "mulipleChoices");
            multipleChoicesBtn.setAttribute("value", multipleChoicesEl);

            multipleChoicesBtn.textContent = multipleChoicesEl;

            multipleChoicesBtn.onclick = choiceCheck;
            multipleChoices.appendChild(multipleChoicesBtn);
        })
    }
}

// Checking User's Answers
function choiceCheck(event) {
    if (secondsLeft <= 0) {
        secondsLeft === 0;
        scoreboard();
    }
    if (this.value !== questionLIst[currentQuestionIndex].answer) {
        feedback.textContent = "Wrong - Correct answer is: " + questionLIst[currentQuestionIndex].answer;
        currentQuestionIndex++;
        secondsLeft -= 5;
        userScreen();

    }
    else {
        score++;
        currentQuestionIndex++;
        userScreen();
    }
}

// Scoreboard at end
function scoreboard() {
    scoreboardEl.classList.remove("hide");
    greetingEl.classList.add("hide");
    quizEL.classList.add("hide");
    viewHighScore();

    scoreEl.textContent = "Score: " + score + " out of 4.";

    submitScore.addEventListener("click", function () {
        addHighScore();
    })

    startOver.addEventListener("click", function () {
        document.location.reload();
    })
}

var initialsEl = document.querySelector("#initials");

// Highscore board
function viewHighScore() {
    highScoreEl.classList.remove("hide");
    var highScores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
    var highScoreHTML = "";
    for (var i = 0; i < highScores.length; i++) {
        var { score, initials } = highScores[i];
        highScoreHTML += `<li> ${initials}: ${score}</li>`
    }
    if (highScoreHTML === "") {
        highScoreHTML = "<h3> No Scores Yet! </h3>";
    }

    highScoreList.innerHTML = highScoreHTML;
}

function addHighScore() {
    var highScores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        var newScore = {
            score, initials
        };
        // Saves information to localStorage
        highScores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highScores))
    }
    viewHighScore();
}

function clearScores() {
    window.localStorage.setItem("highscores", JSON.stringify([]))
    viewHighScore();
}






