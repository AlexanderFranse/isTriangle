// TODO: deze functie doet niet wat ie zegt dat ie zou doen.
export function allParametersZeroOrLess(
  sideA: number,
  sideB: number,
  sideC: number
) {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return false;
  }
  return true;
}

// TODO: complexity is nog steeds te hoog
export function isParameterSmallerThenSumOfRemainingParameters(
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
// TODO: hier klopt iets niet.
export function isTriangle(sideA: number, sideB: number, sideC: number) {
  return (
    allParametersZeroOrLess(sideA, sideB, sideC) &&
    isParameterSmallerThenSumOfRemainingParameters(sideA, sideB, sideC)
  );
}
