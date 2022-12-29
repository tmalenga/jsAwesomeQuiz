// Create an array to store qeuestions and answers
// Populate questions and answers array
// Create a variable to store the score
// Create an eventlister to go to next questions
// Create a button for the next questions
// Create a variable to track Time
// Create var to store user input
// Create a function to evaluate the user's input
// Create a function to call next questions
// Create a function to check the answer of the answer provided & update points on this basis
// Save to local storage
var score = 0;
const question_item = document.getElementById("question_item");
const trueButton = document.getElementById("true-btn");
const falseButton = document.getElementById("false-btn")
const responseArea = document.createElement("div");
let response = document.createElement("h4");
let countDown = document.getElementById("count-down");
let questionNumber = document.getElementById("quiz-details")
// const userName = document.getElementById("username");// Score stuff from here on in
// const saveScore = document.getElementById("saveScoreBtn");
// const finalscoreDiv = document.getElementById("final-score");


let current_question = {};
let counter = 0;
let time_left = 300;
let user_input = "";

var question_1 = new Object();
question_1.text = "A slug's blood is green.";
question_1.answer = "True"

var question_2 = new Object();
question_2.text = "The loudest animal is the African Elephant.";
question_2.answer = "False"

var question_3 = new Object();
question_3.text = "Approximately one quarter of human bones are in the feet.";
question_3.answer = "True"

var question_4 = new Object();
question_4.text = "The total surface area of a human lungs is the size of a football pitch.";
question_4.answer = "True"

var question_5 = new Object();
question_5.text = "In West Virginia, USA, if you accidentally hit an animal with your car,you are free to take it home to eat.";
question_5.answer = "False"

var question_6 = new Object();
question_6.text = "You can lead a cow down stairs but not up stairs.";
question_6.answer = "True"

var question_7 = new Object();
question_7.text = "In London, UK, if you happen to die in the House of Parliament, you are entitled to a state funeral.";
question_7.answer = "False"

var question_8 = new Object();
question_8.text = "No piece of square dry paper can be folded in half more than 7 times.";
question_8.answer = "False"

var question_9 = new Object();
question_9.text = "Google was originally called 'Backrub'.";
question_9.answer = "True"

var question_10 = new Object();
question_10.text = "A few ounces of chocolate can to kill a small dog.";
question_10.answer = "False"

const questions = 
    [ 
        question_1, question_2, question_3, question_4, question_5, 
        question_6, question_7, question_8, question_9, question_10

    ]



// Function to display next question   
function nextQuestion(){
    if (counter < questions.length){
        console.log("counter is "+ counter + "question.lenght is  " + questions.length);
        //console.log(questions);
        questionNumber.innerHTML = "Question number: "+ (counter+1);
        current_question = questions[counter];
        //console.log(current_question);
        question_item.innerHTML = current_question.text;       
        
        
    }
    else{
        // clearInterval(quizTimer);
        
        localStorage.setItem("finalScore", score);
        alert("Game Over. You have answered all questions")        
        return window.location.assign("endgame.html");
        //endgame()

    }
}

nextQuestion()

// timer function using setInterval
function startTimer(){
    
    let quizTimer = setInterval(function(){
        if(time_left <= 0){
            localStorage.setItem("finalScore", score);
            alert("Times up!");
            clearInterval(quizTimer);
            return window.location.assign("endgame.html");
            //endgame()            
        }
        else{
            time_left--;
            countDown.innerHTML = time_left;

        }
    },1000 )
}
startTimer()

// EventListener for true btn    
trueButton.addEventListener("click", function(){    
    console.log("works")
    
  
    if (current_question.answer == "True"){
        score +=10;
        response.textContent = "That is correct! you have " +score+" points"
        console.log(response);
        responseArea.appendChild(response);
        document.getElementById("response-area").appendChild(responseArea);
        counter ++;             
    }
    else{
        response.textContent = "That is NOT correct! you have " +score+" points and have got a 50 second penalty"
        console.log(response);
        responseArea.appendChild(response);
        document.getElementById("response-area").appendChild(responseArea);
        counter ++;
        time_left -=50;             
        
    }
 nextQuestion(counter)    

})  
// EventListener for false btn
falseButton.addEventListener("click", function(){    
    console.log("works")    
  
    if (current_question.answer == "False"){
        score +=10;
        response.textContent = "That is correct! you have " +score+" points"
        console.log(response);
        responseArea.appendChild(response);
        document.getElementById("response-area").appendChild(responseArea);
        counter ++;             
    }
    else{
        response.textContent = "That is NOT correct! you have " +score+" points and have got a 50 second penalty"
        console.log(response);
        responseArea.appendChild(response);
        document.getElementById("response-area").appendChild(responseArea);
        counter ++;
        time_left -=50;             
        
    }
 nextQuestion(counter)    

})

// function endgame(){
//     items = document.getElementsByClassName("item")
//     items.style.display ="none";

//     //finalscoreDiv.style.display = "block";

//     saveUserScore()
// }

// function saveUserScore(){
//     // to save to local storage
//     saveHighScore = e => {
//         console.log("Works - maybe??");
//         e.preventDefault();    
        
//         let userscore = {
//             name: userName.value, 
//             finalscore: score            
//         };

//         let userscore_serialized = JSON.stringify(userscore)
//         localStorage.setItem("User_Score", userscore_serialized)        
//         console.log(userscore)
//     }
// }
    


    
    


