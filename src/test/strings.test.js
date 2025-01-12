import { describe, test, expect } from 'vitest';
import { log } from './src/tools/helpers.js';

const nameTuto = 'BeginJavaScript';

const upperCaseName = nameTuto.toUpperCase();
const lowerCaseName = nameTuto.toLowerCase();
describe('UpperAndLowerCase', () => {
  test('Upper case name', () => {
    expect(upperCaseName).toBe('BEGINJAVASCRIPT');
  });
  test('Lower case name', () => {
    expect(lowerCaseName).toBe('beginjavascript');
  });
});

const lengthOfName = nameTuto.length;
describe('length of a string', () => {
  test('Length of name', () => {
    expect(lengthOfName).toBe(15);
  });
});

const age = 42;

const stringAge = String(age);
const toStringAge = age.toString();
const initialNameTuto = nameTuto[0];
const lastNameTuto = nameTuto[nameTuto.length - 1];
log({ lastNameTuto });

describe('Age to string', () => {
  test('String age', () => {
    expect(stringAge).toBe('42');
  });
  test('toString age', () => {
    expect(toStringAge).toBe('42');
  });
  test('Initial nameTuto', () => {
    expect(initialNameTuto).toBe('B');
  });
  test('Last character of nameTuto', () => {
    expect(lastNameTuto).toBe('t');
  });
});

