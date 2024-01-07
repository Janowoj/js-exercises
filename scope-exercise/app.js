import { textTwo } from './two.js';

console.log('app.js');
const textOne = 'nadpisany tekst textuOne w module app.js';
console.log(textOne, textTwo);
if (true) {
  const textOne = 'zmienna lokalna';
  console.log('blok kodu', textOne, textTwo);
  console.log(value); // js goes up to the global scope and finds the value variable
  const nestedValue = false;
  var nestedValueByVar = 'zmienna var w bloku kodu';
}
// console.log(nestedValue); // ReferenceError: nestedValue is not defined
console.log(nestedValueByVar);

function logText() {
  const textOne = 'zmienna lokalna w funkcji';
  console.log('Text w funkcji to:', textOne);
  const cityInFunction = 'Warszawa';
  var cityInFunctionByVar = 'Warszavar';
}
logText();
// console.log('Nie mamy dostępu do zmiennej:', cityInFunction); // ReferenceError: cityInFunction is not defined
console.log('Mamy dostęp do zmiennej:', cityInFunctionByVar);
