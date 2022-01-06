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
var q_num = 1;





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



//this button starts the quiz time and updates the questions and answers for the first question.
document.querySelector("#btn_start_quiz").addEventListener("click", function(event){
    document.querySelector("#intro").setAttribute("style", "display:none");
    document.querySelector("#quiz").setAttribute("style", "display:flex");
    quiz_update(q_num);
    countdown();
});

//this function will update the quiz questions and answers depending on the value sent in.
function quiz_update(i){
    if (i > 5){
        document.querySelector("#quiz").setAttribute("style", "display:none");
        document.querySelector("#results").setAttribute("style", "display:flex");
        //end the quiz
    }else{
        question.textContent = questions[i];
        button_1.textContent = answers_row_1[i];
        button_2.textContent = answers_row_2[i];
        button_3.textContent = answers_row_3[i];
        button_4.textContent = answers_row_4[i];
    }
}


//for the purpose of time I am going to set the correct answers to be 
//1 
//3 
//2 
//1 
//4


//Add an event listener for each quiz button then depending on the value of the answer buttton determine if the answer is correct or not.
document.querySelector("#btn_answer_1").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 1||q_num == 4){
        //update the text to say the answer was correct.
        //also add 1 to the variable that holds the number of correct answers.
        document.getElementById("right_wrong").textContent = "Previous answer was Right :)";
        console.log("right")
    }else{
        //update the text to say the answer was wrong.
        document.getElementById("right_wrong").textContent = "Previous answer was Wrong :(";
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)

});

document.querySelector("#btn_answer_2").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 3){
        //update the text to say the answer was correct.
        //also add 1 to the variable that holds the number of correct answers.
        document.getElementById("right_wrong").textContent = "Previous answer was Right :)";
        console.log("right")
    }else{
        //update the text to say the answer was wrong.
        document.getElementById("right_wrong").textContent = "Previous answer was Wrong :(";
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)

});

document.querySelector("#btn_answer_3").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 2){
        //update the text to say the answer was correct.
        //also add 1 to the variable that holds the number of correct answers.
        document.getElementById("right_wrong").textContent = "Previous answer was Right :)";
        console.log("right")
    }else{
        //update the text to say the answer was wrong.
        document.getElementById("right_wrong").textContent = "Previous answer was Wrong :(";
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)

});

document.querySelector("#btn_answer_4").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 5){
        //update the text to say the answer was correct.
        //also add 1 to the variable that holds the number of correct answers.
        document.getElementById("right_wrong").textContent = "Previous answer was Right :)";
        console.log("right")
    }else{
        //update the text to say the answer was wrong.
        document.getElementById("right_wrong").textContent = "Previous answer was Wrong :(";
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)

});







//create a function to subtract time from the clock if the answer is wrong.

//code to submit the form 
document.querySelector("#name_form").addEventListener("click", function(event){
    event.preventDefault();
    var initials_input = document.getElementById("Ini").value;
    document.getElementById("Ini").value = "";

// send initials_input into another function to save it to the highscores.
    console.log(initials_input);


});