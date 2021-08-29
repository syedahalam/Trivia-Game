//getting start to play button
const playBtn = document.querySelector('.play');
//getting quiz main container
const quiz = document.querySelector('.quiz');
//getting quiz questions
const question = document.querySelector('.question');
//getting 3 answer choices
const allAnswerChoices = document.querySelector('.choices'); //event listener
//getting three individual answer choices
const answerChoiceA = document.querySelector('#A');
const answerChoiceB = document.querySelector('#B');
const answerChoiceC = document.querySelector('#C');
//getting scores
const scoreContainer = document.querySelector('.score-container');

const h1 = document.querySelector('#heading');

//questions

let questions = [
	{
		imgQuestion: './images/jump.png',
		question: 'How high cats can jump?',
		choiceA: '6x their height',
		choiceB: '10x their height',
		choiceC: '3x their height',
		correctAnswer: '6x their height',
	},
	{
		imgQuestion: './images/toes.png',
		question: 'Cats have how many total toes?',
		choiceA: '10',
		choiceB: '20',
		choiceC: '18',
		correctAnswer: '18',
	},
	{
		imgQuestion: './images/speed.png',
		question: 'Cats run upto?',
		choiceA: '30mph',
		choiceB: '10mph',
		choiceC: '20mph',
		correctAnswer: '30mph',
	},
	{
		imgQuestion: './images/age.png',
		question: 'Maximum lived cat?',
		choiceA: '28 years',
		choiceB: '18 years',
		choiceC: '31 years',
		correctAnswer: '31 years',
	},
	{
		imgQuestion: './images/taste.png',
		question: "What taste does cats can't recognize?",
		choiceA: 'sweet',
		choiceB: 'sour',
		choiceC: 'bitter',
		correctAnswer: 'sweet',
	},
	{
		imgQuestion: './images/fat.png',
		question: 'Heaviest cat around on record?',
		choiceA: '20 lbs',
		choiceB: '46 lbs',
		choiceC: '34 lbs',
		correctAnswer: '34 lbs',
	},
	{
		imgQuestion: './images/vision.png',
		question: 'How sharp is the night vision of cats, if compared to humans?',
		choiceA: '6x',
		choiceB: '2x',
		choiceC: '10x',
		correctAnswer: '6x',
	},
	{
		imgQuestion: './images/sugar.png',
		question: 'Cats are?',
		choiceA: 'Herbivor',
		choiceB: 'Carnivore',
		choiceC: 'Omnivore',
		correctAnswer: 'Carnivore',
	},
	{
		imgQuestion: './images/sound.png',
		question: 'How many sounds can cats make?',
		choiceA: '100',
		choiceB: '50',
		choiceC: '200',
		correctAnswer: '100',
	},
	{
		imgQuestion: './images/brush.png',
		question: 'How many total teeth cats have?',
		choiceA: '32',
		choiceB: '25',
		choiceC: '30',
		correctAnswer: '30',
	},
];

// variables

const lastQuestion = questions.length - 1;
let activeQuestion = 0;
let count = 0;
let timer = 0;
const questionTime = 10;
let score = 0; //10 sec

//start button event listener
playBtn.addEventListener('click', startQuiz); //calling startQuiz function

allAnswerChoices.addEventListener('click', (event) => {
	let userAnswer = event.target.innerText; //getting values form innerText

	checkAnswer(userAnswer);
});

function startQuiz() {
	playBtn.style.display = 'none';
	h1.style.display = 'none';
	rendorQuestion();
	quiz.style.visibility = 'visible';
}

//rendor question function-> display on the page
function rendorQuestion() {
	let q = questions[activeQuestion]; //grabbing the question from array

	let bodyImg = `url('${q.imgQuestion}')`;
	document.body.style.backgroundImage = bodyImg;

	question.innerHTML = '<p>' + q.question + '</p>'; //creating html element
	answerChoiceA.innerHTML = q.choiceA;
	answerChoiceB.innerHTML = q.choiceB;
	answerChoiceC.innerHTML = q.choiceC;
}
// check answer function
function checkAnswer(answer) {
	if (answer === questions[activeQuestion].correctAnswer) {
	}
	//correctAnswer()
	nextQuestion();
}

//function for next question
function nextQuestion() {
	if (activeQuestion <= lastQuestion) {
		activeQuestion++;
		rendorQuestion();
	} else {
		showScore();
	}
}
//correct answer function

function correctAnswer() {}
