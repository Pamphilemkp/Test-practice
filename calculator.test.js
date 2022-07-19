const calculator = require('./calculator');

let calculation = new calculator(5,6);

describe('The calculator function', () => {
    test('the sum should be 11', () => {
      expect(calculation.sum()).toBe(11);
    });
  
    test('the substraction should be -1', () => {
        expect(calculation.substract()).toBe(-1);
      });

      test('the multiplication should leave 30', () => {
        expect(calculation.multiply()).toBe(30);
      });

      test('the division should be around', () => {
        expect(calculation.divise()).toBe(5/6);
      });
  });