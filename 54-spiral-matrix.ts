import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

type Coord = {
  ri: number;
  ci: number;
};
function spiralOrder(matrix: number[][]): number[] {
  const visited = new Set<string>();
  const res: number[] = [];

  const toS = ({ ri, ci }: Coord) => `ri:${ri}|ci:${ci}`;
  const right = ({ ri, ci }: Coord) => ({ ri, ci: ci + 1 });
  const left = ({ ri, ci }: Coord) => ({ ri, ci: ci - 1 });
  const up = ({ ri, ci }: Coord) => ({ ri: ri - 1, ci });
  const down = ({ ri, ci }: Coord) => ({ ri: ri + 1, ci });
  const cycle = [right, down, left, up];
  let curCycleIndex = 0;

  let curCoord = { ri: 0, ci: 0 };
  let curDirFn = cycle[curCycleIndex];
  while (res.length !== matrix.length * matrix[0].length) {
    visited.add(toS(curCoord));
    const curVal = matrix[curCoord.ri][curCoord.ci];
    res.push(curVal);
    const nextCoord = curDirFn(curCoord);
    // went out of bounds
    if (
      visited.has(toS(nextCoord)) ||
      matrix?.[nextCoord.ri]?.[nextCoord.ci] === undefined
    ) {
      // update direction function
      curCycleIndex = (curCycleIndex + 1) % cycle.length;
      curDirFn = cycle[curCycleIndex];
      curCoord = curDirFn(curCoord);

      continue;
    }
    curCoord = nextCoord;
  }
  console.log({ res });
  return res;
}

Deno.test("basic", () => {
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const expect = [1, 2, 3, 6, 9, 8, 7, 4, 5];
  assertEquals(spiralOrder(matrix), expect);
});

Deno.test("basic 2", () => {
  const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
  const expect = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
  assertEquals(spiralOrder(matrix), expect);
});
