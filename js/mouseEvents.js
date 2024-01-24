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

