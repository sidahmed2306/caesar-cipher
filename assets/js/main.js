const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const schlussel = document.querySelector("#schlussel");
const output = document.querySelector("h1");
const array1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arraySchlussel = [];

submit.addEventListener("click", () => {
  arraySchlussel = [];
  output.innerHTML = "";
  array1.forEach((element) => {
    arraySchlussel.push(element.toUpperCase());
  });
  if (input.value != "") {
    letter = input.value.split("");
    console.log(letter[2]);
    for (let i = 0; i < schlussel.value; i++) {
      let unshiftelement = arraySchlussel.shift();
      arraySchlussel.push(unshiftelement);
      console.log(arraySchlussel);
    }
    for (let j = 0; j < letter.length; j++) {
      for (let d = 0; d < array1.length; d++) {
        if (letter[j] == array1[d]) {
          console.log(letter[j]);
          console.log(array1[d]);
          output.innerHTML += arraySchlussel[d];
        }
      }
    }
    input.value = "";
  }
});
