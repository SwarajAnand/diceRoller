// console.log("Working");
const rollBtn = document.getElementById("rollBtn");
const container = document.getElementById("container");
const diceImage = document.getElementById("diceImage");
const music = new Audio("./Assets/dice.mp3");

let arr = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let lastVal = 0;

rollBtn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 6);
  diceImage.classList.add("rollAnimation");
  music.play();

  setTimeout(() => {
    diceImage.classList.remove("rollAnimation");
  }, 300);

  diceImage.src = `./Assets/${arr[randomNum]}`;
  createElement(randomNum);
});

const createElement = (val) => {
  //   console.log(val);
  let internalDiv = document.createElement("div");
  internalDiv.innerHTML = `
  <p>You got ${val + 1}</p>
  `;

  container.append(internalDiv);
};
