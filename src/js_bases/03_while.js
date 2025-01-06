import { log, prompt, round, stopIfIsNotNumber } from './tools/helpers.js';

const possibleResponses = [1, 2];
let choice = 0;
const c = possibleResponses.includes(choice);
log({ possibleResponses }, { c });

while (choice !== 1 && choice !== 2) {
  choice = Number(await prompt(`Enter a number :`));
}

switch (choice) {
  case 1:
  case 2:
    break;
  default:
    console.error('Invalid choice');
}
log(`You choose ${choice}`);
