import { collectAboutOrigin, inRadians, makeShapeArray } from "./helpers";

/**
 * * collectAboutOrigin
 * @param {int} n
 * @param {int} sizeFactor
 * @param {int} padding
 */
describe("collectAboutOrigin(n::int, sizeFactor::(int || float), padding::(int >=0))", () => {
  // baseLocations[n] === collectAboutOrigin(n, 1, 1);
  const baseLocations = [
    [],
    [0],
    [-1 / 2, 1 / 2],
    [-1, 0, 1],
    [-3 / 2, -1 / 2, 1 / 2, 3 / 2],
    [-2, -1, 0, 1, 2],
    [-5 / 2, -3 / 2, -1 / 2, 1 / 2, 3 / 2, 5 / 2]
  ];

  it("calculates the row correctly when n === 0", () => {
    expect(collectAboutOrigin(0, 1)).toEqual(baseLocations[0]);
  });

  it("calculates the row correctly when n === 1", () => {
    expect(collectAboutOrigin(1, 1)).toEqual(baseLocations[1]);
  });

  it("calculates the row correctly when n is even", () => {
    expect(collectAboutOrigin(2, 1)).toEqual(baseLocations[2]);
    expect(collectAboutOrigin(4, 1)).toEqual(baseLocations[4]);
    expect(collectAboutOrigin(6, 1)).toEqual(baseLocations[6]);
  });

  it("calculates the row correctly when n is odd and > 1", () => {
    expect(collectAboutOrigin(3, 1)).toEqual(baseLocations[3]);
    expect(collectAboutOrigin(5, 1)).toEqual(baseLocations[5]);
  });

  it("uses padding", () => {
    const n = 5;
    const pad = 3;
    const withPadding = baseLocations[n].map((val, i) => val * (pad + 1));

    expect(collectAboutOrigin(n, 1, pad)).toEqual(withPadding);
  });

  it("uses 0 padding when padding is negative", () => {
    expect(collectAboutOrigin(3, 1, -1)).toEqual(baseLocations[3]);
  });
});

/**
 ** makeShapeArray
 *  @param {[int]} number
 *  @param {[int || float]} size
 *  @param {[int || float]} padding
 */

describe("makeShapeArray([ number ], [ size ], [ padding ])", () => {
  const n = [4, 2, 4];
  const s = [1, 2, 3];
  const p = [1, 1, 1];

  const expected = [
    [-3, -2, -9],
    [-3, -2, -3],
    [-3, -2, 3],
    [-3, -2, 9],
    [-3, 2, -9],
    [-3, 2, -3],
    [-3, 2, 3],
    [-3, 2, 9],
    [-1, -2, -9],
    [-1, -2, -3],
    [-1, -2, 3],
    [-1, -2, 9],
    [-1, 2, -9],
    [-1, 2, -3],
    [-1, 2, 3],
    [-1, 2, 9],
    [1, -2, -9],
    [1, -2, -3],
    [1, -2, 3],
    [1, -2, 9],
    [1, 2, -9],
    [1, 2, -3],
    [1, 2, 3],
    [1, 2, 9],
    [3, -2, -9],
    [3, -2, -3],
    [3, -2, 3],
    [3, -2, 9],
    [3, 2, -9],
    [3, 2, -3],
    [3, 2, 3],
    [3, 2, 9]
  ];

  it("Works as intended", () => {
    expect(makeShapeArray(n, s, p)).toEqual(expected);
  });
});

/**
 ** inRadians
 *  @param {int} deg
 */
describe("inRadians(deg::(int || float))", () => {
  const e = [[30, Math.PI / 6], [360, 2 * Math.PI], [540, 3 * Math.PI]];

  test.each(e)("converts (%i) deg to radians", (deg, rad) =>
    expect(inRadians(deg)).toBe(rad)
  );
});
