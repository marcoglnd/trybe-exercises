document.getElementById("header-container").style.backgroundColor = "green";

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "coral";

let urgente1 = document.querySelectorAll(".emergency-tasks div h3");
for (let index = 0; index < urgente1.length; index += 1) {
  urgente1[index].style.backgroundColor = "magenta";
}

document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";

let urgente2 = document.querySelectorAll(".no-emergency-tasks div h3");
for (let index = 0; index < urgente2.length; index += 1) {
  urgente2[index].style.backgroundColor = "black";
}

document.getElementById("footer-container").style.backgroundColor = "navy";