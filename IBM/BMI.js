const mass = document.querySelector("#mass");
const height = document.querySelector("#height");
const button = document.querySelector(".btn");
const result = document.querySelector("#result");

let bmi;
let bmiResult;

function showNoteForWeightCategory(weightCategory){
    let noteDiv = document.createElement("h3");
    let noteText = document.createTextNode(`NOTE : Hey Your BMI is ${bmiResult} and comes under  ${weightCategory} Category.`);
    noteDiv.appendChild(noteText);
    document.body.appendChild(noteDiv);
    noteDiv.style.color = "red";
    noteDiv.style.textAlign = "center";
}

button.addEventListener("click", () => {
  bmi = mass.value / (height.value / 100) ** 2;
  result.textContent = bmi.toFixed(2);
  console.log(bmi);
  bmiResult = bmi.toFixed(2);

  if (bmiResult.length > 6) {
    result.style.fontSize = "100px";
  } else {
    result.style.fontSize = "200px";
  }

  if (bmiResult <= 18.5) {
    showNoteForWeightCategory("Underweight");
  }

  else if (bmiResult >= 18.5 && bmi <= 24.9) {
    showNoteForWeightCategory("Healthy");
  }

  else if (bmiResult >= 25 && bmiResult <= 29.9) {
    showNoteForWeightCategory("Overweight");
  }

  else if (bmiResult >= 30) {
    showNoteForWeightCategory("Obesity");
  }
});