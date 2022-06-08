const capitalize = require('./capitalise')

describe('capitalise', () => {
  test('first word', () => {
    expect(capitalize('marshal')).toBe('Marshal')
  });
});