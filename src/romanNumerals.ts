export function getRomanNumeral(inputValue: number): string {
  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let romanNumeral: string = "";
  //any value greater than 9 can be appended ths same way as 5
  let tempValue = inputValue;
  if (tempValue >= 9) {
    romanNumeral += "IX";
    tempValue -= 9;
  }
  //any value greater than 5 can be appended with 1 to 3 logic in for loop
  if (tempValue >= 5) {
    romanNumeral += "V";
    tempValue -= 5;
  }
  if (tempValue >= 4) {
    romanNumeral += "IV";
    tempValue -= 4;
  }
  //Checking for the values 1,2, and 3
  for (let i = 0; i < tempValue; i++) {
    romanNumeral += "I";
  }

  return romanNumeral;
}
