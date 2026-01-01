addEventListener("DOMContentLoaded", function(){
    let stone = document.getElementById("stone");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let choice = document.querySelector(".choice");
    let computerChoice = document.querySelector(".computerChoice");
    let result_one = document.querySelector(".result_one");
    let display = document.querySelector(".display");


    function randomGenerator(){
        let no = Math.floor(Math.random()*3);
        console.log(no);
        if (no === 0 ){
            return "stone";
        }
        else if (no === 1 ){
            return "paper";
        }
        else if (no === 2 ){
            return "scissors";
        }
    }

    function isTrueFalse(item, comp){
        result_one.textContent = "";
        if(item === comp){
            display.textContent = "draw!";
        }
        else if(
                (item === "stone" && comp === "scissors") ||
                (item === "paper" && comp === "stone")||
                (item === "scissors" && comp === "paper")
            ){
            display.textContent = "user won";
        }
        else{
            display.textContent = "computer won";
        }
    }

    stone.addEventListener("click", function(e){
        let item = stone.textContent.trim();
        choice.textContent = `your choice is - ${item}`;
        let comp = randomGenerator();
        computerChoice.textContent = `computer choice is -${comp}`;
        isTrueFalse(item, comp);
    })
    paper.addEventListener("click", function(e){
        let item = paper.textContent.trim();
        choice.textContent = `your choice is -${item}`;
        let comp = randomGenerator();
        computerChoice.textContent = `computer choice is -${comp}`;
        isTrueFalse(item, comp);
       
    })
    scissors.addEventListener("click", function(e){
        console.log("hhhhay ugdgsyudgsvchsvd");
        console.log(e.target.textContent);
        let item = scissors.textContent.trim();
        choice.textContent = `your choice is -${item}`;
        let comp = randomGenerator();
        computerChoice.textContent = `computer choice is -${comp}`;
        isTrueFalse(item, comp);
    })





})