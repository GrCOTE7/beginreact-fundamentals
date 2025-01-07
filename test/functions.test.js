import { describe, test, expect } from 'vitest';
// import { log } from './src/tools/helpers.js';

const prepareSandwich = (isVegetarian) => {
  let sandwich = '🍞';
  sandwich += '🥗';
  sandwich += '🍅';
  if (!isVegetarian) {
    sandwich += '🐷';
  }
  sandwich += '🍞';
  console.log(sandwich);
  return sandwich;
};

/* Exercice, tu dois aussi les modifier */
describe('prepareSandwich', () => {
  test('should prepare a meat sandwich if not vegetarian', () => {
    const result = prepareSandwich(false);
    expect(result).toEqual('🍞🥗🍅🐷🍞');
  });

  test('should prepare a vegetarian sandwich if vegetarian', () => {
    const result = prepareSandwich(true);
    expect(result).toEqual('🍞🥗🍅🍞');
  });
});
