function allParametersZeroOrLess(sideA: number, sideB: number, sideC: number) {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return false;
  }
  return true;
}
function twoOrAllParametersEquals(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return true;
  }
  return false;
}
function isParameterSmallerThenSumOfRemainingParameters(
  sideA: number,
  sideB: number,
  sideC: number
) {
  const sumBC = sideB + sideC;
  const sumAC = sideA + sideC;
  const sumAB = sideA + sideB;
  if (sumBC < sideA) {
    return false;
  }
  if (sumAC < sideB) {
    return false;
  }
  if (sumAB < sideC) {
    return false;
  }
  return true;
}
export function isTriangleRefactored(
  sideA: number,
  sideB: number,
  sideC: number
) {
  return (
    allParametersZeroOrLess(sideA, sideB, sideC) &&
    twoOrAllParametersEquals(sideA, sideB, sideC) &&
    isParameterSmallerThenSumOfRemainingParameters(sideA, sideB, sideC)
  );
}
