/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const myForm = document.querySelector("form");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formValue = document.querySelector("#search");

  let pounds = formValue.value * 2.2046;
  let grams = formValue.value * 0.001;
  let ounce = formValue.value * 35.274;

  pounds = pounds.toFixed(3);
  grams = grams.toFixed(3);
  ounce = ounce.toFixed(3);

  resultTemplate(formValue.value, pounds, grams, ounce);
});

function resultTemplate(kilo, convertedPounds, convertedGrams, convertedOunce) {
  const outputContainer = document.querySelector("#output");

  const puondCont = document.createElement("div");
  puondCont.setAttribute("class", "resultContainer");

  const gramCont = document.createElement("div");
  gramCont.setAttribute("class", "resultContainer");

  const ounceCont = document.createElement("div");
  ounceCont.setAttribute("class", "resultContainer");

  const puondResult = document.createElement("p");
  puondResult.textContent = `${kilo} kg yra ${convertedPounds} lb`;

  const gramResult = document.createElement("p");
  gramResult.textContent = `${kilo} kg yra ${convertedGrams} g`;

  const ounceResult = document.createElement("p");
  ounceResult.textContent = `${kilo} kg yra ${convertedOunce} oz`;

  puondCont.append(puondResult);
  gramCont.append(gramResult);
  ounceCont.append(ounceResult);

  outputContainer.append(puondCont);
  outputContainer.append(gramCont);
  outputContainer.append(ounceCont);
}
