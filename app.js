


function moveRight() {
  let parent = document.getElementById("list");
   let firstChild = document.querySelector(".slider ul li:first-child");
  parent.append(firstChild);
 
}

function moveLeft() {
  let parent = document.getElementById("list");
   let lastChild = document.querySelector(".slider ul li:last-child");
  parent.prepend(lastChild);
 
}

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37: //left arrow
    case 38: //up arrow
      moveLeft();
      break;
    case 39: //right
    case 40: // down
      moveRight();
      break;
  }
};