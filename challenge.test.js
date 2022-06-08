const stringLength = require('./challenge');

test('Check string length', () => {
  expect(stringLength('string')).toBe(6);
});