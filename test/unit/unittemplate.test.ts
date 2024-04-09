import {
  allParametersZeroOrLess,
  isParameterSmallerThenSumOfRemainingParameters as isParameterEqualOrSmallerThenSumOfRemainingParameters,
} from "../../src/functions";
// TODO: algemeen punt over dit unit test report: wij schrijven het eigenlijk altijd per unit. En niet zoals nu dat units op meerdere plekken terugkomen.
describe(`
// TODO: Dit is nog geschreven vanuit het 'ik' perspectief
// TODO: 'if you can make a triangle of it' --> van wat?
I have a function that is able to check if you can make a triangle of it.
The possibility to make a triangle of it depends on the length of the sides of the triangle.
Sidelength A, B and C, are parameters that you give to the function to calculate if it is possible to make a triangle.`, () => {
  // TODO: ik zou in een test report technische termen vermijden, zoals 'the function'
  describe("The function should not be able to make a triangle when: ", () => {
    // TODO: paramEter
    // TODO: volgens mij klopt er hier iets niet. Kijk eens goed naar de functienaam en naar wat de test doet.
    // TODO: ik zou zelf 'at least' verwachten als je iets positiefs checkt. Zoals: het is wel een driehoek als tenminste een van de kanten... Nu zou ik eerder iets als 'one or more'
    it("At least one of the three given paramater has a value of 0", () => {
      const a = 0;
      const b = 2;
      const c = 3;
      // TODO: o.b.v. de functienaam hieronder zou je al kunnen stellen dat ie meer doet dan 1 ding.
      expect(allParametersZeroOrLess(a, b, c)).toBeFalsy();
    });
    // TODO: paramEter
    it("At least one of the three given paramater has a negative value", () => {
      const a = 3;
      const b = -2;
      const c = 3;
      expect(allParametersZeroOrLess(a, b, c)).toBeFalsy();
    });
    describe("When the sum of two sideLength is smaller then one sideLength, the function should not be able to make a triangle as well", () => {
      // TODO: het lijkt wel alsof deze testen net andersom geschreven zijn dan de code.
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
