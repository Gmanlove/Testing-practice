const stringLength = require('./sum');




test('stringLength should return the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
  });
  
  test('stringLength should throw an error if the string is less than 1 character', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
  });
  
  test('stringLength should throw an error if the string is more than 10 characters', () => {
    expect(() => stringLength('this is too long')).toThrow('String length must be between 1 and 10 characters');
  });
  
  test('stringLength should not throw an error if the string is between 1 and 10 characters', () => {
    expect(() => stringLength('valid')).not.toThrow();
  });

  

  

  