const dark_light = document.querySelector('.input');
const link = document.querySelector("link");
dark_light.addEventListener("click", () => {
  if (dark_light.checked) {
    link.setAttribute("href", "dark_style.css");
    console.log("dark")
  } else {
    link.setAttribute("href", "light_style.css");
  }
})

const btn = document.querySelectorAll(".op_digit");
let digit = "";
let display = document.querySelector("#display");
display.value = digit;
btn.forEach((element) => {
  element.addEventListener("click", (obj) => {
    digit += obj.target.value;
    display.value = digit;
  });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", calculate);
function calculate() {
  try {
    digit = eval(digit);
    display.value = digit;
  } catch (error) {
    display.value = "Error";
  }
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  digit = "";
  display.value = digit;
});

document.querySelector("#deletelast").addEventListener("click",function deleteLast() {
  try{
    digit = digit.slice(0, -1);
    display.value = digit;
  }catch(error){
    display.value = "error";
  }
});