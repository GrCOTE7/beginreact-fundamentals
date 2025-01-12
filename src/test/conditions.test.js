import { describe, test, expect } from 'vitest';
import { log } from './src/tools/helpers.js';

const fruit = 'Apple';

const isLengthOfFruitMoreThan4 = fruit.length > 4;
const isLengthOfFruitLessThan4 = fruit.length < 4;
const isLengthOfFruitEqual5 = fruit.length == 5;
const isFruitEqualApple = fruit === 'Apple';
const isFruitEqualBanana = fruit === 'Banana';
describe('Fruit test', () => {
  test('isLengthOfFruitMoreThan4', () => {
    expect(isLengthOfFruitMoreThan4).toBe(true);
  });
  test('isLengthOfFruitLessThan4', () => {
    expect(isLengthOfFruitLessThan4).toBe(false);
  });
  test('isLengthOfFruitEqual5', () => {
    expect(isLengthOfFruitEqual5).toBe(true);
  });
  test('isFruitEqualApple', () => {
    expect(isFruitEqualApple).toBe(true);
  });
  test('isFruitEqualBanana', () => {
    expect(isFruitEqualBanana).toBe(false);
  });
});

const name = 'John';

const isNameStartWithJ = name.startsWith('J'); // true
const isNameLengthMoreThan4 = name.length > 4; // false

//                    👇 true           👇 false
const isBothTrue = isNameStartWithJ && isNameLengthMoreThan4;
describe('Name test', () => {
  test('isBothTrue', () => {
    expect(isNameStartWithJ && isNameLengthMoreThan4).toBe(false);
  });
});

function fruitCondition(fruit) {
  // - Si le fruit est falsy, on retourne false
  // - Si le fruit possède 5 caractères, on retourne true uniquement s'il commence par "P"
  // - Si le fruit possède 10 caractères, on retourne true uniquement s'il NE commence PAS par "R"
  // - Si le fruit ne possède ni 5 ni 10 caractères, on retourne false.

  const test =
    fruit
      && fruit.length === 5 && fruit.startsWith('P')
      || (fruit.length === 10 && !fruit.startsWith('R'))
      && (fruit.length === 5 || fruit.length === 10)
      
  return test
}
/* - Ne pas modifier - */
describe('Fruit multi tests', () => {
  test('If empty, false', () => {
    expect(fruitCondition('')).toBe(false);
  });
  test('If 5 caractères and start with P, true', () => {
    expect(fruitCondition('Pomme')).toBe(true);
  });
  test("If 5 characters but doesn't start with P, false", () => {
    expect(fruitCondition('Figue')).toBe(false);
  });
  test('If not 5 or 10 characters, false', () => {
    expect(fruitCondition('Banana')).toBe(false);
  });
  test("If 10 characters and not start with R, true", () => {
    expect(fruitCondition("Cantaloupe")).toBe(true)
  })
  test("If 10 characters and start with R, false", () => {
    expect(fruitCondition("Raisinette")).toBe(false)
  })
});
