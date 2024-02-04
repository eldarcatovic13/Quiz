let data = [
    {
        questions: 'What is capital of Montenegro?',
        answers: [
            {text: 'Podgorica', validity:true},
            {text: 'Budva', validity:false},
            {text: 'Kotor', validity:false},
        ]
    },
    {
        questions: 'What is capital of England?',
        answers: [
            {text: 'Birmingham', validity:false},
            {text: 'London', validity:true},
            {text: 'Liverpool', validity:false}
        ]
    },
    {
        questions: 'What is capital of Italy',
        answers: [
            {text: 'Venecia', validity:false},
            {text: 'Bari', validity:false},
            {text: 'Rim', validity:true},
        ]
    },
    {
        questions: 'What is capital of Scotland',
        answers: [
            {text: 'Edinburgh', validity:true},
            {text: 'Glasgow', validity:false},
            {text: 'Stirling', validity:false},
        ]
    },
    {
        questions: 'What is capital of Japan',
        answers: [
            {text: 'Kyoto', validity:false},
            {text: 'Tokyo', validity:true},
            {text: 'Hiroshima', validity:false}
        ]
    },
    {
        questions: 'What is capital of Greece',
        answers: [
            {text: 'Kalamata', validity:false},
            {text: 'Chania', validity:false},
            {text: 'Athens', validity:true}
        ]
    }
]

let quizQuestion = document.getElementById("quizQuestion")
let quizAnswers = document.getElementById("quizAnswers")
let score = 0
let questionNumber = 0

function startQuiz(){
    score = 0
    questionNumber = 0
    displayQuestions(data[questionNumber])
}

function displayQuestions(question){
    quizQuestion.innerText = question.questions
    question.answers.forEach(textButtons => {
        const button = document.createElement("button")
        button.innerHTML = textButtons.text
        button.addEventListener("click", () => {
            selectAnswer(textButtons)
            button.style.background = "#e7eaf6"
        })
        quizAnswers.appendChild(button)
    });
}

function selectAnswer(answer){
    const correct = answer.validity
    if(correct === true){
        score++
    }
}

function nextQuestion(){
    quizAnswers.innerHTML = ""
    questionNumber++
    if(questionNumber < data.length){
        displayQuestions(data[questionNumber])
    } else {
        finishQuiz()
    }
}

function finishQuiz(){
    quizAnswers.innerHTML = ""
    quizQuestion.innerHTML = ""
    quizAnswers.innerHTML = `Your score is ${score} out of 6`
}

function resetQuestion(){
    quizAnswers.innerHTML = ""
    score = 0
    questionNumber = 0
    startQuiz()
}

startQuiz()