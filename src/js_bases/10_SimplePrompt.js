import { log, prompt, round, stopIfIsNotNumber } from './tools/helpers.js';

const firstNumber = await prompt('Chiffre 1 ? ');
stopIfIsNotNumber(firstNumber);
const secondNumber = await prompt('Chiffre 2 ? ');
stopIfIsNotNumber(secondNumber);
// const secondNumber = 0;

if (secondNumber == 0) {
  log("Error : secondNumber can't be 0");
  if (typeof process !== 'undefined') process.exit(1);
  else console.error("app crashed");
}
log(firstNumber, '/', secondNumber, '=', round(firstNumber / secondNumber, 2));
let numberNumber = Number(secondNumber);
log ({secondNumber}, {numberNumber});
