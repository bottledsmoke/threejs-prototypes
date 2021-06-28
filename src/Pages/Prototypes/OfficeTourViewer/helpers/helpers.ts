// TODO: Name these two functions better. inRadians is fine.

/**
 ** collectAboutOrigin
 *  Evenly space a 1D set of numbers about 0.
 *  @author Tyler Hellner
 *  @param {int} n: number of items
 *  @param {int} sizeFactor: uniform size of each item
 *  @param {int} padding: spacing between items
 */
export function collectAboutOrigin(
  n: number,
  sizeFactor: number,
  padding = 0
): number[] {
  const _p = Math.abs(padding); // no negative padding. defaults to 0 if so.
  const _n = Math.floor(n); // no float sizes.
  let acc = _n % 2 === 0 ? [] : [0]; // even number of objects = no object in center. Odd? Object perfectly in center.

  for (var i = (_n % 2) + 1; i <= _n - 1; i += 2) {
    const pos = sizeFactor * (_p + 1) * (i / 2);
    acc.unshift(-pos);
    acc.push(pos);
  }

  return acc;
}

/**
 ** makeShapeArray
 *  @author Tyler Hellner
 *  @param {[ int ]} number
 *  @param {[ int || float ]} size
 *  @param {[ int || float ]} padding
 */
export function makeShapeArray(
  number: [number, number, number],
  size: [number, number, number],
  padding = [0, 0, 0]
): Array<number[]> {
  const shapeOrigins = {
    x: collectAboutOrigin(number[0], size[0], padding[0]),
    y: collectAboutOrigin(number[1], size[1], padding[1]),
    z: collectAboutOrigin(number[2], size[2], padding[2]),
  };

  let items: Array<number[]> = [];

  shapeOrigins.x.forEach((x) => {
    shapeOrigins.y.forEach((y) => {
      shapeOrigins.z.forEach((z) => {
        items.push([x, y, z]);
      });
    });
  });

  return items;
}

/**
 ** inRadians
 *  Takes a number in degrees and outputs it in radians
 *  @author Tyler Hellner
 *  @param {int} deg
 */
export const inRadians = (deg: number): number => {
  return (deg * Math.PI) / 180;
};
