// need multiple variables to store the following variables.
//  if the quiz is running.
//  number of questions answered
//  score
//  highscore
//  time
var timerEl = document.getElementById('time_remaining');
//  a variable for each of the 4 possible buttons for answers.
var button_1 = document.getElementById("btn_answer_1");
var button_2 = document.getElementById("btn_answer_2");
var button_3 = document.getElementById("btn_answer_3");
var button_4 = document.getElementById("btn_answer_4");
//  a variable that stores an aray with all the questions.
var question = document.getElementById("quiz_question");
//  final score





//first set the stuff we dont want seen to have a display of none

//define an object with properties being numbers and the values being the corosponding quiz question.
//each of the quiz questions will corospond to the same numbered answer in each of the answers objects. 
//I am doing it this way so that I can use the same number to get the question and all answers. 
const questions = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e"
};

const answers_row_1 = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e"
}

const answers_row_2 = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e"
}

const answers_row_3 = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e"
}

const answers_row_4 = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e"
}





//define an object with properties being numbers and the values being the corosponding quiz answers.
//add a property called correct and add the number of the correct answer so that we can compare on the go.

//initialize the timer to a default time

// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        
      }
    }, 1000);
}




document.querySelector("#btn_start_quiz").addEventListener("click", function(event){
    document.querySelector("#intro").setAttribute("style", "display:none");
    document.querySelector("#quiz").setAttribute("style", "display:flex");
    document.getElementById("quiz_question").value = "questions[1]";
    quiz_start();
    countdown();
    
});


function quiz_start(){
    console.log()
    question.textContent = questions[1];
    button_1.textContent = answers_row_1[1];
    button_2.textContent = answers_row_2[1];
    button_3.textContent = answers_row_3[1];
    button_4.textContent = answers_row_4[1];
}



//create a function to verify any answer.





//create a function to subtract time from the clock if the answer is wrong.

//code to submit the form 
document.querySelector("#name_form").addEventListener("click", function(event){
    event.preventDefault();
    var initials_input = document.getElementById("Ini").value;
    document.getElementById("Ini").value = "";

// send initials_input into another function to save it to the highscores.
    console.log(initials_input);


});