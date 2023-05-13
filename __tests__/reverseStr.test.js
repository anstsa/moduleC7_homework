import { reverseStr } from "../src/reverseStr.js";

describe("tests for reverseStr function", () => {
  it("Hello reverse olleH ", () => {
    expect(reverseStr("Hello")).toBe("olleH");
  }),
  it("abc1 reverse 1cba", () => {
    expect(reverseStr("abc1")).toBe("1cba");
  })
});