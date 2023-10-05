// const celsiusFieled = document.querySelector("celsius");
const degree = document.getElementById("degree");

const button = document.getElementById("btn");

const temp = document.getElementById("temp");

const form = document.getElementById("form");
const result = document.getElementById("resultValue")




// console.log(degree.value);

// 
window.addEventListener("load", () => {
  degree.value = "Fahrenheit";
  degree.innerHTML = "";
})
button.addEventListener("click", (e) => {
  // console.log("clicked")
  e.preventDefault();
  convert();
})

const convert = () => {
  // console.log("main convert mein agya hu")
  let inputValue = degree.value;
  console.log(inputValue);
  setTimeout(() => {
    if (temp.value === "fahrenheit") {
      let F2C = (inputValue - 32) * (5 / 9);
      result.innerHTML = `${F2C}`;
    }
    else if (temp.value === "kelvin") {
      let K2C = inputValue - 273.15;
      result.innerHTML = `${K2C} `;
    }

  }, 1200);
}