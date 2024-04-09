import { isTriangle } from "../../src/functions";

describe(`I have a function that is able to check if you can make a triangle of it.
The possibility to make a triangle of it depends on the length of the sides of the triangle.
Sidelength A, B and C, are parameters that you give to the function to calculate if it is possible to make a triangle.`, () => {
  it("The function is able to make a triangle when you have sidelengths of 4, 6 and 7", () => {
    expect(isTriangle(4, 6, 7)).toBeTruthy();
  });
});
