const doorOne = document.querySelector(".doorOne")
doorOne.addEventListener("click", toggleDoorOne);

function toggleDoorOne(ev) {
  doorOne.classList.toggle("doorOpen");
  ev.stopPropagation();
}

const bdOne = document.querySelector(".bdOne");
bdOne.addEventListener("click", toggleDoorOne);

const doorTwo = document.querySelector(".doorTwo")
doorTwo.addEventListener("click", toggleDoorTwo);

function toggleDoorTwo(ev) {
  doorTwo.classList.toggle("doorOpen");
  ev.stopPropagation();
}

const bdTwo = document.querySelector(".bdTwo")
bdTwo.addEventListener("click", toggleDoorTwo);

const doorThree = document.querySelector(".doorThree")
doorThree.addEventListener("click", toggleDoorThree);

function toggleDoorThree(ev) {
  doorThree.classList.toggle("doorOpen");
  ev.stopPropagation();
}

const bdThree = document.querySelector(".bdThree")
bdThree.addEventListener("click", toggleDoorThree);

const doorFour = document.querySelector(".doorFour")
doorFour.addEventListener("click", toggleDoorFour);

function toggleDoorFour(ev) {
  doorFour.classList.toggle("doorOpen");
  ev.stopPropagation();
}

const bdFour = document.querySelector(".bdFour")
bdFour.addEventListener("click", toggleDoorFour);

/*const 
doors = document.querySelectorAll(".door"); //array of doors
window.selected = doors;

const doorListener = function (door) {door.addEventListener("click", toggleDoor(door))};

doors.forEach((element) => element.addEventListener("click", toggleDoor(element)))

function toggleDoor(element) {
    element.innerHTML = "<p>You've selected this door!<p>";
  }
*/
