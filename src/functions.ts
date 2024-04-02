function allParametersMoreThenZero(
  sideA: number,
  sideB: number,
  sideC: number
) {
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
export function isTriangleRefactored(
  sideA: number,
  sideB: number,
  sideC: number
) {
  return (
    allParametersMoreThenZero(sideA, sideB, sideC) &&
    twoOrAllParametersEquals(sideA, sideB, sideC)
  );
}
