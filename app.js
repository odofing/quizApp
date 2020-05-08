const question = document.getElementById('question'),
     options = Array.from(document.getElementsByClassName('quiz-text')),
     totalQuestion = document.querySelector('.total-question'),
     maxScore = document.querySelector('.max-score'),
      TotalScore = document.querySelector('.score');

   // console.log(options);
     let currentQuestion = {};
     let acceptingAnswers = false;
     let score = 0;
     let questionCounter = 0;
     let availableQuestions = [];

     // set quiz questions
     let questions = [
         {
        question: "Who is the founder of StartNG internship program?",
        option1: "Jeffrey Ogah",
        option2: "Onifade Seyi",
        option3: "Emmanuel Owojori",
        option4: "Mark Essien",
        answer: 2

         },
         {
            question: "Who many stages are available in the HNG board?",
            option1: "7",
            option2: "8",
            option3: "5",
            option4: "10",
            answer: 4
    
             },
             {
                question: "Who is the co-founder of HNG internship program?",
                option1: "Jeffrey Ogah",
                option2: "Tomisin Lalude",
                option3: "Mark Essien",
                option4: "Agboola Eniola",
                answer: 3
        
                 },
                 {
                    question: "Who coordinates javascript task in StartNG internship program?",
                    
                    option1: "Austin Asoluka",
                    option2: "Adelugba Emmanuel",
                    option3: "Jeffrey Ogah",
                    option4: "Agboola Eniola",
                    answer: 3
            
                     },
                     {
                        question: "Who is the coordinator of HTML/CSS task in StartNG internship program?",
                        option1: "Tomisin Lalude",
                        option2: "Jeffrey Ogah",
                        option3: "Emmanuel Owojori",
                        option4: "Agboola Eniola",
                        answer: 4
                
                         },

     ];

     const correctQuestion = 20;
     const maxQuestions = 5;
     const maxAnswers = 100;


    function startQuiz () {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];

        getNewQuestion();

    };
    startQuiz();
    // console.log(availableQuestions)

function getNewQuestion () {

    // end the quiz then return to the ending page
if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
     return window.location.href="endpage.html";
}

    questionCounter++;

    // Display question and total score counters 
 totalQuestion.innerText = `${questionCounter}/${maxQuestions}`;
 maxScore.innerText = `${score}/${maxAnswers}`;
 
 
   

//Get random questions form the array

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


// iterate through questions

options.forEach(option => {
const number = option.dataset["number"];
option.innerText = currentQuestion["option" + number];


});

// Remove the last question answered.
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;

};

// Add event listener to target quiz options
options.forEach(option => {
    option.addEventListener('click', e => {
     //   console.log(e.target);
if (!acceptingAnswers) 
return;
acceptingAnswers = false;



// output selected answer into the console
const selectedOption = e.target;
const selectedAnswer = selectedOption.dataset["number"];

 // Using the ternary operator to display a correct & incorrect answer

 const optionPicked = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    // console.log (optionPicked);

    // Increment Score by calling increment score function

    if (optionPicked === "correct") {
        incrementScore(correctQuestion);
      }

// Display correct & incorrect answers in the console with true/false.

 //console.log(selectedAnswer == currentQuestion.answer);

/*
 
selectedOption.parentElement.classList.add(optionPicked);

  setTimeout(function () {
    selectedOption.parentElement.classList.remove(optionPicked);

    getNewQuestion();


 }, 2000);

 */
selectedOption.parentElement.classList.add(optionPicked);

 document.getElementById('next-Btn').addEventListener('click', function (e) {
     

    selectedOption.parentElement.classList.remove(optionPicked);
    
    

    getNewQuestion();


    e.preventDefault();
 });
 
 
 

     
    });
});   

// Create score increment function
incrementScore = num => {
    score += num;
   // TotalScore.innerText = score;
  };

startQuiz();


   