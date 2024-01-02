import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

type Coord = { ri: number; ci: number };

function cToS(c: Coord): string {
  return `ri:${c.ri}-ci:${c.ci}`;
}

function bfs(grid: number[][], source: Coord, visited: Set<string>): number {
  let areaCount = 0;

  if (grid[source.ri][source.ci] !== 1) {
    return areaCount;
  }
  const q = [source];
  while (q.length > 0) {
    const cur = q.shift();
    if (!cur) {
      throw Error("empty queue");
    }
    if (visited.has(cToS(cur))) {
      continue;
    }
    visited.add(cToS(cur));
    areaCount++;
    const ds = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    ds.map(([dr, dc]) => {
      return {
        ri: cur.ri + dr,
        ci: cur.ci + dc,
      };
    }).filter((c) => {
      return grid?.[c.ri]?.[c.ci] === 1;
    }).forEach((n) => q.push(n));
  }
  return areaCount;
}

function maxAreaOfIsland(grid: number[][]): number {
  let max = Number.MIN_SAFE_INTEGER;
  const visited = new Set<string>();
  grid.forEach((row, ri) => {
    row.forEach((v, ci) => {
      const curCount = bfs(grid, { ri, ci }, visited);
      max = Math.max(max, curCount);
    });
  });
  return max;
}

Deno.test("basic", () => {
  const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ];
  const expected = 6;
  assertEquals(maxAreaOfIsland(grid), expected);
});

Deno.test("basic 2", () => {
  const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
  const expected = 0;
  assertEquals(maxAreaOfIsland(grid), expected);
});
