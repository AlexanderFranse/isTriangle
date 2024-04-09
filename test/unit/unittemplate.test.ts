import {
  allParametersZeroOrLess,
  isParameterSmallerThenSumOfRemainingParameters as isParameterEqualOrSmallerThenSumOfRemainingParameters,
} from "../../src/functions";

describe(`
I have a function that is able to check if you can make a triangle of it.
The possibility to make a triangle of it depends on the length of the sides of the triangle.
Sidelength A, B and C, are parameters that you give to the function to calculate if it is possible to make a triangle.`, () => {
  describe("The function should not be able to make a triangle when: ", () => {
    it("At least one of the three given paramater has a value of 0", () => {
      const a = 0;
      const b = 2;
      const c = 3;
      expect(allParametersZeroOrLess(a, b, c)).toBeFalsy();
    });

    it("At least one of the three given paramater has a negative value", () => {
      const a = 3;
      const b = -2;
      const c = 3;
      expect(allParametersZeroOrLess(a, b, c)).toBeFalsy();
    });
    describe("When the sum of two sideLength is smaller then one sideLength, the function should not be able to make a triangle as well", () => {
      it("The sum of sideLength B and C is smaller then sideLength A", () => {
        const a = 7;
        const b = 2;
        const c = 2;
        expect(
          isParameterEqualOrSmallerThenSumOfRemainingParameters(a, b, c)
        ).toBeFalsy();
      });

      it("The sum of sideLength A and C is smaller then sideLength B", () => {
        const a = 5;
        const b = 12;
        const c = 4;
        expect(
          isParameterEqualOrSmallerThenSumOfRemainingParameters(a, b, c)
        ).toBeFalsy();
      });

      it("The sum of sideLength A and B is smaller then sideLength C", () => {
        const a = 1;
        const b = 2;
        const c = 9;
        expect(
          isParameterEqualOrSmallerThenSumOfRemainingParameters(a, b, c)
        ).toBeFalsy();
      });
    });
  });
  describe("The function should be able to make a triangle when: ", () => {
    it("The parameters are higher then 0", () => {
      const a = 1;
      const b = 2;
      const c = 2;
      expect(allParametersZeroOrLess(a, b, c)).toBeTruthy();
    });
    it("The sum of two parameters is higher then the remaining parameter", () => {
      const a = 4;
      const b = 10;
      const c = 8;
      expect(
        isParameterEqualOrSmallerThenSumOfRemainingParameters(a, b, c)
      ).toBeTruthy();
    });
  });
});
