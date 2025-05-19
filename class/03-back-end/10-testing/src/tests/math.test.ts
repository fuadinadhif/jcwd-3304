import { sum } from "../basics/math-basic";

// test suites
describe("Math module", () => {
  describe("sum function", () => {
    it("should handle zero properly", () => {
      expect(sum(0, 0)).toBe(0);
      expect(sum(10, 0)).toEqual(10);
      expect(sum(0, 25)).toBe(25);
    });

    it("should handle negative numbers correctly", () => {
      expect(sum(-1, -5)).toBe(-6);
      expect(sum(10, -5)).toBe(5);
      expect(sum(-2, 10)).toBe(8);
    });
  });

  // describe("subtract function", () => {});
});
