const { sum, nativeNull } = require("./intro");

describe("Sum function", () => {
  test(" should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test(" should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
  });

  test(" should sum 2 float values correctly", () => {
    expect(sum(0.3, 0.4)).toBeCloseTo(0.7);
  });
});

describe("Native null function", () => {
  test("should rreturn false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
