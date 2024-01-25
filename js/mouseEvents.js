let btnOne = document.getElementById("click");
btnOne.addEventListener("click", function(e) {
    e.target.style.background = "#a0b96b";
});

let btnTwo = document.getElementById("dblclick");
btnTwo.addEventListener("dblclick", function(e) {
  e.target.style.border = "4px dotted #ec8f6a";
});

let btnThree = document.getElementById("onMouseOver");
btnThree.addEventListener("mouseover", function(e) {
    e.target.style.fontSize = "20px";
});

let btnFour = document.getElementById("onContextMenu");
btnFour.addEventListener("contextmenu", function(e) {
  e.target.style.background = "cyan";
});


const btnWiggle = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const btnWiggleDuration = {
  duration: 2000,
  iterations: 1,
};

let inputOne = document.getElementById("inputOne");

inputOne.addEventListener("keypress", () => {
  inputOne.animate(btnWiggle, btnWiggleDuration);
});

inputOne.addEventListener("keypress", function(e) {
  inputOne.removeEventListener()
});


/*
let inputTwo = document.getElementById("inputTwo");
inputTwo.addEventListener("altkey", function(e) {
  e.target.style. = "";
});

let inputThree = do cument.getElementById("inputThree");
inputThree.addEventListener("ctrlkey", function(e) {
    e.target.style. = "";
});

let inputFour = document.getElementById("inputFour");
inputFour.addEventListener("shiftkey", function(e) {
  e.target.style. = "";
});
*/