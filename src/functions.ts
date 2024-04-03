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
function isSideLengthNotTooLong(sideA: number, sideB: number, sideC: number) {
  // eslint-disable-next-line prettier/prettier
  if (sideA + sideB > sideC && 
      sideA + sideC > sideB &&
      sideB + sideC > sideA) {
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
    twoOrAllParametersEquals(sideA, sideB, sideC) &&
    isSideLengthNotTooLong(sideA, sideB, sideC)
  );
}
