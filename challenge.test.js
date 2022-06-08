const stringLength = require('./challenge');

describe('String tests', () => {
test('Check string length', () => {
  expect(stringLength('string')).toBe(6);
});

test('Null', () => {
  expect(stringLength('')).toBe(undefined);
});

test('Out of bound', () => {
  expect(stringLength('thisiswaygreaterthan10char')).toBe(undefined);
});
});

const reverse = require('./challenge');
describe ('Reverse tests', () => {
test('Reverse', () => {
  expect(reverse('tina')).toBe(4);
});
});