document.addEventListener('DOMContentLoaded',function (e) {
    
    const startBtn=document.getElementById('start-btn');
    const quizContainer=document.getElementById('quiz-container');
   const questionContiner= document.getElementById('question-container');
  const questionText=document.getElementById('question-text');
  const choicesList=document.getElementById('choices-list');
 const  nextBtn=document.getElementById("next-btn");
  const resultContainer=document.getElementById("result-container");
 const restartBtn=document.getElementById('restart-btn');
 const scoreDisplay=document.getElementById("score");


const questions=[

  
 
    {
        questions: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"], //array of string
        answer: "Paris",
    },

    
 
    
    {
        questions: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
     questions: "Who wrote 'Hamlet'",
     choices: ["Shakespeare", "Marlowe", "Milton", "Aust"],
     answer: "Shakespeare",
    }


];

let currentindex=0;
let score=0;


startBtn.addEventListener('click',showQuestion);

function showQuestion(){

    startBtn.classList.add('hidden');
    
    questionContiner.classList.remove('hidden');
    questionText.textContent=questions[currentindex].questions;


choicesList.innerHTML=""; //clear previous choices
questions[currentindex].choices.forEach(choice => {
const List=document.createElement("li");
List.innerHTML=`
 <li >${choice}</li>  `;

 
 choicesList.append(List);

List.addEventListener('click',()=>selectAnswer(choice))  //this will help to pass the rference of the function with parameter 
 



})

}

function selectAnswer(choice){
 const correctAnswer=questions[currentindex].answer;
        if(choice=== correctAnswer){
score ++;
}

nextBtn.classList.remove('hidden');

}
nextBtn.addEventListener('click',function (e) {
    currentindex++;
    if(currentindex<questions.length){
        showQuestion();
    }else{
        showResult();
    }



})

function showResult(){
 questionContiner.classList.add('hidden');
resultContainer.classList.remove('hidden');
scoreDisplay.textContent=`${score} out of ${questions.length}`;

}

restartBtn.addEventListener('click',function(){
    currentindex=0;
    score=0;
    resultContainer.classList.add('hidden');
    questionContiner.classList.remove('hidden');
   
    showQuestion();
})



});


















