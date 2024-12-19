/*const 
doors = document.querySelectorAll(".door"); //array of doors
window.selected = doors;

const doorListener = function (door) {door.addEventListener("click", toggleDoor(door))};

doors.forEach((element) => element.addEventListener("click", toggleDoor(element)))

function toggleDoor(element) {
    element.innerHTML = "<p>You've selected this door!<p>";
  }
*/

const doorOne = document.querySelector(".doorOne")
doorOne.addEventListener("click", toggleDoorOne);

function toggleDoorOne() {
  doorOne.classList.toggle("doorOpen");
}

const doorTwo = document.querySelector(".doorTwo")
doorTwo.addEventListener("click", toggleDoorTwo);

function toggleDoorTwo() {
  doorTwo.classList.toggle("doorOpen");
}

const doorThree = document.querySelector(".doorThree")
doorThree.addEventListener("click", toggleDoorThree);

function toggleDoorThree() {
  doorThree.classList.toggle("doorOpen");
}

const doorFour = document.querySelector(".doorFour")
doorFour.addEventListener("click", toggleDoorFour);

function toggleDoorFour() {
  doorFour.classList.toggle("doorOpen");
}