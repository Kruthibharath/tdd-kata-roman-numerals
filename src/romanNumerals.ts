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
  //checking for 4 and 5
  if (inputValue == 5) {
    romanNumeral += "V";
  } else if (inputValue == 4) {
    romanNumeral += "IV";
  } else {
    //Checking for the values 1,2, and 3
    for (let i = 0; i < inputValue; i++) {
      romanNumeral += "I";
    }
  }

  return romanNumeral;
}
