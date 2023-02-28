function stringLength(string) {
    const length = string.length;
    if (length < 1 || length > 10) {
      throw new Error('String length must be between 1 and 10 characters');
    }
    return length;
  }
  
  module.exports = stringLength;



  const assert = require('assert');

  function testReverseString() {
    const input = "hello";
    const expectedOutput = "olleh";
    const actualOutput = reverseString(input);
    assert.strictEqual(actualOutput, expectedOutput);
  }
  
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  testReverseString();
  










  class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  describe("Calculator", () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe("add", () => {
      test("should add two positive numbers correctly", () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test("should add a positive and a negative number correctly", () => {
        expect(calculator.add(-2, 3)).toBe(1);
      });
  
      test("should add two negative numbers correctly", () => {
        expect(calculator.add(-2, -3)).toBe(-5);
      });
    });
  
    describe("subtract", () => {
      test("should subtract two positive numbers correctly", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      test("should subtract a positive and a negative number correctly", () => {
        expect(calculator.subtract(-2, 3)).toBe(-5);
      });
  
      test("should subtract two negative numbers correctly", () => {
        expect(calculator.subtract(-2, -3)).toBe(1);
      });
    });
  
    describe("divide", () => {
      test("should divide two positive numbers correctly", () => {
        expect(calculator.divide(6, 3)).toBe(2);
      });
  
      test("should throw an error when dividing by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
      });
  
      test("should divide a positive and a negative number correctly", () => {
        expect(calculator.divide(-6, 3)).toBe(-2);
      });
    });
  
    describe("multiply", () => {
      test("should multiply two positive numbers correctly", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      test("should multiply a positive and a negative number correctly", () => {
        expect(calculator.multiply(-2, 3)).toBe(-6);
      });
  
      test("should multiply two negative numbers correctly", () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
    });
  });
  
  


  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Test case
  const inputStr = "hello world";
  const expectedOutput = "Hello world";
  const actualOutput = capitalize(inputStr);
  
  if (actualOutput === expectedOutput) {
    console.log("Test passed!");
  } else {
    console.log(`Test failed. Expected ${expectedOutput}, but got ${actualOutput}`);
  }
  