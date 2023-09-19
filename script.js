const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackContainer = document.getElementById('feedback-container');
const highscoresList = document.getElementById('highscores-list');

const questions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hypertext Markup Language', 'Hyperlink and Text Markup Language', 'Hyper Transfer Markup Language'],
        answer: 'Hypertext Markup Language'
    },
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheet', 'Computer Style Sheet', 'Creative Style Sheet'],
        answer: 'Cascading Style Sheet'
    },
    {
        question: 'What is JavaScript?',
        options: ['A programming language', 'A type of coffee', 'A hardware component'],
        answer: 'A programming language'
    },
    
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60; 
let score = 0;
let highScores = [];

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.style.display = 'none';
    questionContainer.style.display = 'block';
    startTimer();

    showQuestion();
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];

        questionText.textContent = currentQuestion.question;
        optionsList.innerHTML = '';

        for (let i = 0; i < currentQuestion.options.length; i++) {
            const option = document.createElement('li');
            option.textContent = currentQuestion.options[i];
            option.addEventListener('click', function () {
                checkAnswer(currentQuestion, i);
            });
            optionsList.appendChild(option);
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(question, selectedOptionIndex) {
    if (question.answer === question.options[selectedOptionIndex]) {
        score++;
        feedbackContainer.textContent = 'Correct!';
    } else {
        timeLeft -= 10; 
        feedbackContainer.textContent = 'Wrong!';
    }

    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.style.display = 'none';

    const initials = prompt('Enter your initials:');
    const scoreEntry = { initials, score };
    highScores.push(scoreEntry);
    highScores.sort((a, b) => b.score - a.score);

    displayHighScores();
}

function displayHighScores() {
    while (highscoresList.firstChild) {
        highscoresList.removeChild(highscoresList.firstChild);
    }
    for (let i = 0; i < highScores.length; i++) {
        const scoreEntry = highScores[i];
        const li = document.createElement('li');
        li.textContent = `${scoreEntry.initials}: ${scoreEntry.score}`;
        highscoresList.appendChild(li);
    }
}