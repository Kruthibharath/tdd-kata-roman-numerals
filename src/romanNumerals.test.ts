import { getRomanNumeral } from "./romanNumerals";

/*describe("test for undefined value", () => {
  //Arrange
  const inputValue = getRomanNumeral(3000);
  const result = "valid input must be less than 3000";
  //Act/Assert
  test("Should return Valid input is required", () => {
    expect(inputValue).toBe(result);
  });
});*/

describe("test for simple numeric value", () => {
  //Arrange
  const inputValue = getRomanNumeral(1);
  const result = "I";
  //Act/Assert
  test("Should return I for 1", () => {
    expect(inputValue).toBe(result);
  });
});

describe("test for small numeric value", () => {
  //Arrange
  const inputValue = getRomanNumeral(3);
  const result = "III";
  //Act/Assert
  test("Should return III for 3", () => {
    expect(inputValue).toBe(result);
  });
});
