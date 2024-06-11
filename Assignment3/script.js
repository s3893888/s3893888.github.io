
const searchTool = document.querySelector("#search-tool");

document.addEventListener("mousemove", revealImage);

function revealImage(event) {
  searchTool.style.translate = `${event.clientX}px ${event.clientY}px`;
}


const trashSpots = document.querySelectorAll(".trash");

trashSpots.forEach(addHover);

function addHover(spot) {

  spot.addEventListener("mouseover", function () {
    displayMessage(spot);
  });
}

function displayMessage(spot) {
  spot.innerHTML = " <p>Trash Found</p>";
}

