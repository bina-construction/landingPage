import { isText, isTel, isEmail, isPostal, verifForm } from "./verifForm";

describe("Basic functions to test the fields individually", () => {
  describe("Is text function", () => {
    it("should be a text", () => {
      const result = isText("This is a text");
      expect(result).toBeTruthy();
    });
    it("shouldn't be a text", () => {
      const result = isText("  ");
      expect(result).toBeFalsy();
    });
    it("shouldn't be a text", () => {
      const result = isText("");
      expect(result).toBeFalsy();
    });
    it("shouldn't be a text", () => {
      const result = isText("23");
      expect(result).toBeFalsy();
    });
  });
  describe("Is phone number function", () => {
    it("should be a phone number", () => {
      const result = isTel("+33 6 29 34 21 85");
      expect(result).toBeTruthy();
    });
    it("should be a phone number", () => {
      const result = isTel("06 29 34 21 85");
      expect(result).toBeTruthy();
    });
    it("should be a phone number", () => {
      const result = isTel("6 29 34 21 85");
      expect(result).toBeTruthy();
    });
    it("should be a phone number", () => {
      const result = isTel("06-29-34-21-85");
      expect(result).toBeTruthy();
    });
    it("should be a phone number", () => {
      const result = isTel("0629342185");
      expect(result).toBeTruthy();
    });
    it("shouldn't be a phone number", () => {
      const result = isTel("+33 6 29 34 21");
      expect(result).toBeFalsy();
    });
    it("shouldn't be a phone number", () => {
      const result = isTel("06 29 34 21 0");
      expect(result).toBeFalsy();
    });
  });
  describe("Is e-mail function", () => {
    it("should be an email adress", () => {
      const result = isEmail("test@example.com");
      expect(result).toBeTruthy;
    });
    it("shouldn't be an email adress", () => {
      const result = isEmail("test@example");
      expect(result).toBeFalsy();
    });
    it("should be an email adress", () => {
      const result = isEmail("testexample");
      expect(result).toBeFalsy();
    });
  });
  describe("Is Postal function", () => {
    it("should be a postal code", () => {
      const result = isPostal(93440);
      expect(result).toBeTruthy();
    });
    it("shouldn't be a postal code", () => {
      const result = isPostal(parseInt("00000"));
      expect(result).toBeFalsy();
    });
    it("shouldn't be a postal code", () => {
      const result = isPostal(123456);
      expect(result).toBeFalsy();
    });
  });
});

describe("Verifiction of form function", () => {
  it("should be True (=> All field)", () => {
    const result = verifForm({
      corporation: "NJG-Connect",
      name: "Random",
      mail: "example@njg.fr",
      postal: 75000,
      phone: "06 12 34 45 67",
    });
    expect(result.success).toBeTruthy();
  });
  it("should be true (=> Only name & phone)", () => {
    const result = verifForm({
      name: "Random",
      phone: "06 12 34 45 67",
    });
    expect(result.success).toBeTruthy();
  });
  it("should be true (=> without corporation)", () => {
    const result = verifForm({
      name: "Random",
      mail: "example@njg.fr",
      postal: 75000,
      phone: "06 12 34 45 67",
    });
    expect(result.success).toBeTruthy();
  });
  it("should be False (=> mail fail)", () => {
    const result = verifForm({
      corporation: "NJG-Connect",
      name: "Random",
      mail: "example",
      postal: 75000,
      phone: "06 12 34 45 67",
    });
    expect(result).toEqual({ error: ["mail"], success: false });
  });
  it("should be False (=> phone & postal fail)", () => {
    const result = verifForm({
      corporation: "NJG-Connect",
      name: "Random",
      postal: 750000,
      phone: "06 12 34 45 67 00",
    });
    expect(result).toEqual({ error: ["postal", "phone"], success: false });
  });
  it("should be False (=> Empty)", () => {
    const result = verifForm({
      name: "",
      mail: "",
      postal: "",
      phone: "",
    });
    expect(result).toEqual({
      error: ["name", "mail", "postal", "phone"],
      success: false,
    });
  });
});
