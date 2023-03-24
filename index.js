//random number between 1 - 10 with random function from math property
const num1 =  Math.floor(Math.random() *10); //no between 1-10
const num2 =  Math.ceil(Math.random() *10); //no between 1-10

//we now need to change the numbers from the header
//First, bring it to the JS file -> the h1 tag has an ID of question so we can return it with getElmentByID method 

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");


//we need to update the score on screen
//bring it in the index.js with getElementByID
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")); //make it a number JSON.parse()
                       //in order to prevent score to be updated, we get it from the local storage
                       //now we are saving our scores inside the local storage

//in order to prevent a situation when there's no score in the local storage, not to get any error 
//if there's no score
if(!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;


//Now we can manipulate it with innerHTML or innerText
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`; // backticks + ${} for variables

//Now each time you refresh the page you get diff numbers
//we need the answer now
const correctAnswer = num1 * num2;

//Now we need to take the user's input/answer
//We added a form (Enter your answer) so we need to add an add event listener to the form and track the submission of the form and get the data from the input

formEl.addEventListener("submit", () => {
   const userAnswer = +inputEl.value; //value used to be string, converted it with the + 
   if(userAnswer === correctAnswer){
     score++; //score needs to be stored inside the local storage of the browser if we want it not to reset each time we refresh the page
     updateLocalStorage();
   }else {
    score--;
    updateLocalStorage();
   }
});
//anytime the user submits the form, we activate a callback function to get the info (whatever is inside the input)
//we can get whatever is inside the input by bringing the input element id

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
    //we need to convert score to string as it was a number and browser will not allow us to store it
    //this is for the security of the browser, only allows u to store strings
}