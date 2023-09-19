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

