// HAMBURGER BUTTON TOGGLE

function myFunction(x) {
    x.classList.toggle("change");
}

let disabled = true;
let pageSelector = document.querySelector(".page-selector");

document.querySelector(".container").addEventListener("click", () => {

  if (disabled) 
  {
    pageSelector.classList.remove("inactive");
  }
  else 
  {
    pageSelector.classList.add("inactive");
  }

  disabled = !disabled;

});

// HAMBURGER BUTTON TOGGLE END