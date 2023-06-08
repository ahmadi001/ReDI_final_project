const quizData = [
    {
        question: "1. When pedestrians are crossing the road near a pedestrian crossing, you should",
        a: "Slow down, sound the horn, and then continue",
        b: "Sound the horn, and then continue",
        c: "Stop the vehicle and wait for pedestrians to cross the road before continuing",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "2. What is the legal age to ride a motorcycle without a gear?",
        a: "24 years",
        b: "20 years",
        c: "16 years",
        d: "18 years",
        correct: "c",
    },
    {
        question: "3. Which side of the road should a vehicle's driver drive on?",
        a: "Left side",
        b: "Reight side",
        c: "Middle",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "4. If you are on a one way",
        a: "Parking your vehicle is prohibited",
        b: "It is not advisable to drive in reverse gear",
        c: "Overtaking another vehicle is prohabitide",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5. What does a red traffic signal signify?",
        a: "Vehicle should be slowed down",
        b: "Drive with caution",
        c: "Stop the vehicle completely",
        d: "Ready for move",
        correct: "c",
    },
    {
        question: "6. When should we use the fog lamps?",
        a: "During night",
        b: "When the vehicle in front of you is not using dim lights",
        c: "Mis is present",
        d: "During the day",
        correct: "c",
    },
    {
        question: "7. What does a yellow light during traffic signify?",
        a: "Stop the vehicle completely",
        b: "Slow down the vehicle",
        c: "Rrduce your vehicle speed and drive cautiously",
        d: "Ignore it",
        correct: "c",
    },
    {
        question: "8. Which vehicle is permitted to go at a speed of 60 kilometers per hour?",
        a: "Truck/heavy bus",
        b: "Cars",
        c: "a and b",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "9. What does over speeding?",
        a: "An offence that may result in your driver's licence being revoked or suspended",
        b: "Is not an offence and be overlooked",
        c: "Is an offence, although no charges will be pressed",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "10. If a vehicle is parked on the side of the road late at night",
        a: "The parking light should be left on",
        b: "It is necessary to lock the car",
        c: "It should has ticket for parking",
        d: "none of the above",
        correct: "b",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score *10}% questions correctly</h2>
            <a href="index.html"> <button onclick="index.html">Finish</button></a>
           `
       }   
    }
})