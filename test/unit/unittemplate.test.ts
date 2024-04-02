import { isTriangleRefactored } from "../../src/functions";

describe(`
I have received parameter values and I want to check if you can make a triangle of it.`, () => {
  describe("return false if", () => {
    it("One of the three given paramater has a value of 0", () => {
      const a = 0;
      const b = 2;
      const c = 3;
      expect(isTriangleRefactored(a, b, c)).toBeFalsy();
    });

    it("One of the three given paramater has a negative value", () => {
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
  });

  describe("return true if", () => {
    it("2 of the 3 given parameters are equal", () => {
      const a = 1;
      const b = 2;
      const c = 2;
      expect(isTriangleRefactored(a, b, c)).toBeTruthy();
    });
  });
});
