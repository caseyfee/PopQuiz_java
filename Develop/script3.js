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
                greeting.removeAttribute("hidden");
                userScreen();
            });

// Start Quiz
seenScreenEl = document.getElementById("seenScreen");

function userScreen() {
    
    
    var currentQuestion = questionLIst[currentQuestion];
    var questionsEl = document.getElementById("questions");

    questionsEl.textContent = currentQuestion.question;
    
    seenScreenEl.innerHTML = "";

    currentQuestion.question.forEach(function (multipleChoices,i) {
        var multipleChoicesBtn = document.createElement("button");
        multipleChoicesBtn.setAttribute("class", "choice");
        multipleChoicesBtn.setAttribute("value", multipleChoices);

        // multipleChoicesBtn.textContent = i +1+ "."+multipleChoices;

        multipleChoicesBtn.onclick=choiceCheck;
        choicesEl.appendChild(multipleChoicesBtn);
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
    

// function scoreboard() {
//     const userInitials = document.querySelector("#initials")
//             var score = localStorage.getItem("score");
//             var initials = initials
//             localStorage.get("initials");
//             localStorage.setItem("score", score);
//             localStorage.setItem("initials", initials);
// }
// function checkForEnter(event) {
//     if(event.key === "Enter") {
//         saveHighscore();
//     }}

    
//     initialsEL.onkeyup = checkForEnter;
    // document.getElementById("greeting").hidden = true;
    //     document.getElementById("question-pocket1").hidden = true;
    //     document.getElementById("question-pocket2").hidden = true;
    //     document.getElementById("scoreboard").hidden = false;
            
// }