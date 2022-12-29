const userName = document.getElementById("username");
const saveScore = document.getElementById("saveScoreBtn");
const finalscoreDiv = document.getElementById("final-score");
const score = document.getElementById("score");
const gameScore = localStorage.getItem('finalScore');
score.innerText = "Your score is: " + gameScore;


function saveUserScore(){
    // to save to local storage
    saveHighScore = e => {
        console.log("Works - maybe??");
        e.preventDefault();    
        
        // let userscore = {
        //     name: userName.value, 
        //     finalscore: gameScore            
        // };
        let name = userName.value;
        console.log(name);


        localStorage.setItem(name, gameScore)        

    }

}
saveUserScore()