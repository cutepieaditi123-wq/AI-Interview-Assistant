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
        },

        {
    question: "Question 5: What is a Python decorator?",
    answer: "decorator" 
    },
            {
            question: "Question 6: What is exception handling?",
            answer: "try except"
        },
{
    question: "Question 7: What is inheritance?",
    answer: "inheritance"
},
{
    question: "Question 8: What is polymorphism?",
    answer: "polymorphism"
},
{
    question: "Question 9: What is a lambda function?",
    answer: "anonymous function"
},
{
    question: "Question 10: What is multithreading?",
    answer: "multiple threads"
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
        },

        {
    question: "Question 5: What is OOP in Java?",
    answer: "object oriented programming"
},
{
    question: "Question 6: What is Inheritance in Java?",
    answer: "inheritance"
},
{
    question: "Question 7: What is Polymorphism?",
    answer: "polymorphism"
},
{
    question: "Question 8: What is Encapsulation?",
    answer: "encapsulation"
},
{
    question: "Question 9: What is Abstraction?",
    answer: "abstraction"
},
{
    question: "Question 10: What is Constructor in Java?",
    answer: "constructor"
},
{
    question: "Question 11: What is Method Overloading?",
    answer: "same method different parameters"
},
{
    question: "Question 12: What is Method Overriding?",
    answer: "runtime polymorphism"
},
{
    question: "Question 13: What is Exception Handling in Java?",
    answer: "try catch"
},
{
    question: "Question 14: What is Multithreading in Java?",
    answer: "multiple threads"
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
        },
      {
    question: "Question 5: What is Responsive Web Design?",
    answer: "responsive"
},
{
    question: "Question 6: What is the DOM?",
    answer: "document object model"
},
{
    question: "Question 7: What is the difference between id and class in HTML?",
    answer: "id unique class multiple"
},
{
    question: "Question 8: What is Flexbox in CSS?",
    answer: "flexbox"
},
{
    question: "Question 9: What is the difference between let, var and const?",
    answer: "let var const"
},
{
    question: "Question 10: What are JavaScript events?",
    answer: "events"
},
{
    question: "Question 11: What is Bootstrap?",
    answer: "css framework"
},
{
    question: "Question 12: What is Media Query?",
    answer: "media query"
},
{
    question: "Question 13: What is Local Storage?",
    answer: "local storage"
},
{
    question: "Question 14: What is Session Storage?",
    answer: "session storage"
},
{
    question: "Question 15: What is Event Bubbling?",
    answer: "event bubbling"
},
{
    question: "Question 16: What is Event Delegation?",
    answer: "event delegation"
},
{
    question: "Question 17: What is the difference between GET and POST?",
    answer: "get post"
},
{
    question: "Question 18: What is an API?",
    answer: "application programming interface"
},
{
    question: "Question 19: What is JSON?",
    answer: "javascript object notation"
},
{
    question: "Question 20: What is AJAX?",
    answer: "asynchronous javascript xml"
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
        },
        {
    question: "Question 5: Why should we hire you?",
    answer: "skills"
},
{
    question: "Question 6: What are your strengths?",
    answer: "strength"
},
{
    question: "Question 7: What are your weaknesses?",
    answer: "weakness"
},
{
    question: "Question 8: Why do you want to work with our company?",
    answer: "company"
},
{
    question: "Question 9: Where do you see yourself in 5 years?",
    answer: "career"
},
{
    question: "Question 10: What motivates you?",
    answer: "motivation"
},
{
    question: "Question 11: How do you handle stress and pressure?",
    answer: "stress"
},
{
    question: "Question 12: Describe a challenging situation you faced.",
    answer:"challenge"
}
    ]

};

// Load selected domain questions
let questions = interviewQuestions[selectedDomain];
     // Shuffle questions
questions = [...questions];
questions.sort(() => Math.random() - 0.5);

// Random number of questions (7 to 12)
const randomCount = Math.floor(Math.random() * 6) + 7;
questions = questions.slice(0, randomCount);
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
    totalScore += 10;

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
function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported in this browser.");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        document.getElementById("answer").value =
            event.results[0][0].transcript;
    };

    recognition.start();
}
