import demo from "../forTest.js";

describe("Пример теста", () => {
  test("should return expected result", () => {
    expect(demo(3)).toBe(4);
  });
});
