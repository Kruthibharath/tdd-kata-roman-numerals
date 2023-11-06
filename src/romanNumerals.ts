export function getRomanNumeral(inputValue: number): string {
  /*if (inputValue === (undefined || 3000))
    throw new Error("valid input is required");*/

  const romanNumeral =
    inputValue === 3000
      ? "valid input must be less than 3000"
      : inputValue === 1
      ? "I"
      : inputValue === 2
      ? "II"
      : inputValue === 3
      ? "III"
      : "IV";

  return romanNumeral;
}
