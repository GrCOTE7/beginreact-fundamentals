import readline from 'readline';

export function log(...message) {
  console.log(...message);
}

/**
 * La function prompt permet de récupérer une valeur saisie par l'utilisateur
 * @param {string} question La question à poser à l'utilisateur
 * @returns {Promise<string>} Une promise qui sera résolue avec la valeur saisie par l'utilisateur
 */
export function prompt(question) {
  if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
    // Exécution dans le navigateur
    return new Promise((resolve) => {
      const response = window.prompt(question);
      resolve(response);
    });
  } else {
    // Exécution dans Node.js
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
}

export function round(value, decimals = 2) {
  const multiplier = 10 ** decimals;
  return Math.round(value * multiplier) / multiplier;
}

export function stopIfIsNotNumber(number) {
  const parsedNumber = Number(number);
  if (isNaN(parsedNumber)) {
    log('Error :', number, "isn't a number");
    process.exit(1);
  }
  return parsedNumber;
}
