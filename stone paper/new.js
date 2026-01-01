document.addEventListener("DOMContentLoaded", function () {
  const stone = document.getElementById("stone");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const choice = document.querySelector(".choice");
  const computerChoice = document.querySelector(".computerChoice");
  const result_one = document.querySelector(".result_one");
  const display = document.querySelector(".display");
  // const newThing = document.querySelectorAll

  function randomGenerator() {
    const choices = ["stone", "paper", "scissors"];
    const no = Math.floor(Math.random() * 3);
    return choices[no];
  }

  function isTrueFalse(user, comp) {
    result_one.textContent = "Result -";
    if (user === comp) {
      display.textContent = "Draw!";
    } else if (
      (user === "stone" && comp === "scissors") ||
      (user === "paper" && comp === "stone") ||
      (user === "scissors" && comp === "paper")
    ) {
      display.textContent = "You won!";
    } else {
      display.textContent = "Computer won!";
    }
  }

  function handleClick(button) {
    const item = button.id;
    choice.textContent = `Your choice: ${item}`;
    const comp = randomGenerator();
    computerChoice.textContent = `Computer choice: ${comp}`;
    isTrueFalse(item, comp);
  }

  stone.addEventListener("click", () => handleClick(stone));
  paper.addEventListener("click", () => handleClick(paper));
  scissors.addEventListener("click", () => handleClick(scissors));
});
