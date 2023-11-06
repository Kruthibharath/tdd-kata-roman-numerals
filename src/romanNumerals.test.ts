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
  const inputValue = getRomanNumeral(4);
  const result = "IV";
  //Act/Assert
  test("Should return IV for 4", () => {
    expect(inputValue).toBe(result);
  });
});

describe("test for small numeric value", () => {
  //Arrange
  const inputValue = getRomanNumeral(5);
  const result = "V";
  //Act/Assert
  test("Should return V for 5", () => {
    expect(inputValue).toBe(result);
  });
});

describe("test for small numeric value", () => {
  //Arrange
  const inputValue = getRomanNumeral(8);
  const result = "VIII";
  //Act/Assert
  test("Should return VIII for 8", () => {
    expect(inputValue).toBe(result);
  });
});
