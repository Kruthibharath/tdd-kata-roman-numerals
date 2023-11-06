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

describe("test for single character numeric value", () => {
  //Arrange
  const inputValue = getRomanNumeral(5);
  const result = "V";
  //Act/Assert
  test("Should return V for 5", () => {
    expect(inputValue).toBe(result);
  });
});

describe("test for append logic", () => {
  //Arrange
  const inputValue = getRomanNumeral(8);
  const result = "VIII";
  //Act/Assert
  test("Should return VIII for 8", () => {
    expect(inputValue).toBe(result);
  });
});

describe("test for pattern working for other numeric value", () => {
  //Arrange
  const inputValue = getRomanNumeral(9);
  const result = "IX";
  //Act/Assert
  test("Should return IX for 9", () => {
    expect(inputValue).toBe(result);
  });
});

describe("test for single character roman numerics", () => {
  test("Should return X for 10", () => {
    expect(getRomanNumeral(10)).toBe("X");
  });
  test("Should return L for 50", () => {
    expect(getRomanNumeral(50)).toBe("L");
  });
  test("Should return D for 500", () => {
    expect(getRomanNumeral(500)).toBe("D");
  });
  test("Should return M for 1000", () => {
    expect(getRomanNumeral(1000)).toBe("M");
  });
});

describe("test for double characters roman numerics", () => {
  test("Should return XL for 40", () => {
    expect(getRomanNumeral(40)).toBe("XL");
  });
  test("Should return LX for 60", () => {
    expect(getRomanNumeral(60)).toBe("LX");
  });
  test("Should return CD for 400", () => {
    expect(getRomanNumeral(400)).toBe("CD");
  });
  test("Should return CM for 900", () => {
    expect(getRomanNumeral(900)).toBe("CM");
  });
  test("Should return ML for 1050", () => {
    expect(getRomanNumeral(1050)).toBe("ML");
  });
  test("Should return MC for 1100", () => {
    expect(getRomanNumeral(1100)).toBe("MC");
  });
});

describe("test for three/four characters roman numerics", () => {
  test("Should return XLII for 42", () => {
    expect(getRomanNumeral(42)).toBe("XLII");
  });
  test("Should return LXV for 65", () => {
    expect(getRomanNumeral(65)).toBe("LXV");
  });
  test("Should return CDX for 410", () => {
    expect(getRomanNumeral(410)).toBe("CDX");
  });
  test("Should return CML for 950", () => {
    expect(getRomanNumeral(950)).toBe("CML");
  });
  test("Should return MLIX for 1059", () => {
    expect(getRomanNumeral(1059)).toBe("MLIX");
  });
  test("Should return MCL for 1150", () => {
    expect(getRomanNumeral(1150)).toBe("MCL");
  });
});
