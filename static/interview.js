// ==========================
// AI Interview Assistant
// Part 1 - Domain & Questions
// ==========================

// Get selected domain from home page
const selectedDomain = localStorage.getItem("domain");

// Questions for every domain
const interviewQuestions = {

    python: [
        {
            question: "Question 1: What is Python?",
            answer: "programming language"
        },
        {
            question: "Question 2: What is List in Python?",
            answer: "collection"
        },
        {
            question: "Question 3: What is Tuple?",
            answer: "immutable"
        },
        {
            question: "Question 4: What is Dictionary?",
            answer: "key value"
        }
    ],

    java: [
        {
            question: "Question 1: What is Java?",
            answer: "object oriented"
        },
        {
            question: "Question 2: What is JVM?",
            answer: "java virtual machine"
        },
        {
            question: "Question 3: What is JDK?",
            answer: "development kit"
        },
        {
            question: "Question 4: What is Inheritance?",
            answer: "inherit"
        }
    ],

    web: [
        {
            question: "Question 1: What is HTML?",
            answer: "markup language"
        },
        {
            question: "Question 2: What is CSS?",
            answer: "style"
        },
        {
            question: "Question 3: What is JavaScript?",
            answer: "scripting language"
        },
        {
            question: "Question 4: What is Bootstrap?",
            answer: "framework"
        }
    ],

    hr: [
        {
            question: "Question 1: Tell me about yourself.",
            answer: ""
        },
        {
            question: "Question 2: Why should we hire you?",
            answer: ""
        },
        {
            question: "Question 3: What are your strengths?",
            answer: ""
        },
        {
            question: "Question 4: Where do you see yourself in 5 years?",
            answer: ""
        }
    ]

};

// Load selected domain questions
let questions = interviewQuestions[selectedDomain];

// Safety check
if (!questions) {
    alert("Please select a domain first.");
    window.location.href = "/";
}

// Variables
let current = 0;
let totalScore = 0;

// Show first question
window.onload = function () {
    document.getElementById("question").innerHTML =
        questions[current].question;
};


// ==========================
// Part 2 - Timer, Score, Progress Bar
// ==========================

let timeLeft = 60;
let timer;

function startTimer() {

    clearInterval(timer);

    timeLeft = 60;

    document.getElementById("timer").innerHTML =
        "⏰ Time Left: " + timeLeft + " sec";

    timer = setInterval(function () {

        timeLeft--;

        document.getElementById("timer").innerHTML =
            "⏰ Time Left: " + timeLeft + " sec";

        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("⏰ Time's Up!");

            nextQuestion();

        }

    }, 1000);

}

function nextQuestion() {

    let userAnswer =
        document.getElementById("answer").value.toLowerCase();

    if (
        questions[current].answer !== "" &&
        userAnswer.includes(questions[current].answer)
    ) {

        totalScore += 10;

        document.getElementById("feedback").innerHTML =
            "✅ Excellent Answer!";

    } else {

        document.getElementById("feedback").innerHTML =
            "❌ Try Again!";

    }

    document.getElementById("score").innerHTML =
        "Score : " + totalScore;

    current++;

    if (current < questions.length) {

        document.getElementById("question").innerHTML =
            questions[current].question;

        document.getElementById("answer").value = "";

        // Progress Bar
        let progress = ((current + 1) / questions.length) * 100;

        document.getElementById("progress-bar").style.width =
            progress + "%";

        document.getElementById("progress-text").innerHTML =
            "Question " + (current + 1) + " of " + questions.length;

        startTimer();

    } else {

        clearInterval(timer);

        document.getElementById("question").innerHTML =
            "🎉 Interview Completed!";

        document.getElementById("answer").style.display = "none";

        document.querySelector(".btn").style.display = "none";
 

        let percentage = (totalScore / (questions.length * 10)) * 100;

let grade = "";

if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else {
    grade = "Needs Improvement";
}

document.getElementById("result-card").style.display = "block";

document.getElementById("final-score").innerHTML =
"🏆 Score : " + totalScore + " / " + (questions.length * 10);

document.getElementById("final-percentage").innerHTML =
"📊 Percentage : " + percentage.toFixed(0) + "%";

document.getElementById("final-grade").innerHTML =
"⭐ Grade : " + grade;
    }

}

// Start timer when page loads
startTimer();

function toggleDarkMode(){

    document.body.classList.toggle("dark");

    let btn = document.getElementById("darkBtn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML = "☀️ Light Mode";
    }
    else{
        btn.innerHTML = "🌙 Dark Mode";
    }

}
