import { log, prompt } from './tools/helpers.js';
let firstNumber = await prompt('Chiffre 1 ? ');
stopIfIsNotNumber(firstNumber);
let secondNumber = await prompt('Chiffre 2 ? ');
stopIfIsNotNumber(secondNumber);

if (secondNumber == 0) {
  log("Error : secondNumber can't be 0");
  process.exit(1);
}
log(firstNumber, '/', secondNumber, '=', firstNumber / secondNumber);

function stopIfIsNotNumber(number) {
  const parsedNumber = Number(number);
  if (isNaN(parsedNumber)) {
    log("Error :", number, "isn't a number");
    process.exit(1);
  }
  return parsedNumber;
}
