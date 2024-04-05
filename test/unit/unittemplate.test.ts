import { isTriangleRefactored } from "../../src/functions";

describe(`
I have a function that is able to check if you can make a triangle of it.
The possibility to make a triangle of it depends on the length of the sides of the triangle.
Sidelength A, B and C, are parameters that you give to the function to calculate if it is possible to make a triangle`, () => {
  describe("The function should not be able to make a triangle when: ", () => {
    it("At least one of the three given paramater has a value of 0", () => {
      const a = 0;
      const b = 2;
      const c = 3;
      expect(isTriangleRefactored(a, b, c)).toBeFalsy();
    });

    it("At least one of the three given paramater has a negative value", () => {
      const a = 3;
      const b = -2;
      const c = 3;
      expect(isTriangleRefactored(a, b, c)).toBeFalsy();
    });

    it("None of the parameters are equal", () => {
      const a = 1;
      const b = 2;
      const c = 3;
      expect(isTriangleRefactored(a, b, c)).toBeFalsy();
    });

    it("The sum of two parameters is smaller then the remaining parameter", () => {
      const a = 7;
      const b = 2;
      const c = 2;
      expect(isTriangleRefactored(a, b, c)).toBeFalsy();
    });
  });

  describe("The function should be able to make a triangle when: ", () => {
    it("At least 2 of the 3 given parameters are equal", () => {
      const a = 1;
      const b = 2;
      const c = 2;
      expect(isTriangleRefactored(a, b, c)).toBeTruthy();
    });
  });
});
