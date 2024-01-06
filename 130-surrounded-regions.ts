/**
 Do not return anything, modify board in-place instead.
 */

import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

type Coord = {
  ri: number;
  ci: number;
};
function toS({ ri, ci }: Coord) {
  return `ri:${ri}|ci-${ci}`;
}
function solve(board: string[][]): void {
  const stack: Coord[] = [];
  // go across borders, and find Os, store them in a stack
  board.forEach((row, ri) => {
    row.forEach((v, ci) => {
      if (
        v === "O" &&
        (ri === board.length - 1 || ci === board[0].length - 1 || ri === 0 ||
          ci === 0)
      ) {
        stack.push({ ri, ci });
      }
    });
  });
  // DFS to find adjacent to border
  const visited = new Set<string>();
  const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur) {
      throw Error("invalid dfs case");
    }
    visited.add(toS(cur));
    const neighbors = deltas.map(([rd, cd]) => ({
      ri: cur.ri + rd,
      ci: cur.ci + cd,
    })).filter(({ ri, ci }) => board?.[ri]?.[ci] === "O")
      .filter((n) => !visited.has(toS(n)));
    neighbors.forEach((n) => stack.push(n));
  }

  // flip everything except visited on the **inside**
  board.forEach((row, ri) => {
    if (ri === 0 || ri === board.length - 1) {
      return;
    }
    row.forEach((_v, ci) => {
      if (ci === 0 || ci === board[0].length - 1) {
        return;
      }
      if (!visited.has(toS({ ri, ci }))) {
        board[ri][ci] = "X";
      }
    });
  });
}

Deno.test("basic", () => {
  const board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], [
    "X",
    "X",
    "O",
    "X",
  ], ["X", "O", "X", "X"]];
  const expected = [["X", "X", "X", "X"], ["X", "X", "X", "X"], [
    "X",
    "X",
    "X",
    "X",
  ], ["X", "O", "X", "X"]];
  solve(board);
  assertEquals(board, expected);
});

Deno.test("failing", () => {
  const board = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
  const expected = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
  solve(board);
  assertEquals(board, expected);
});

Deno.test("failing 2", () => {
  const board = [
    ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
    ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "O", "X", "X", "X", "X", "X"],
    ["X", "O", "X", "X", "X", "O", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X"],
    ["X", "X", "O", "X", "X", "O", "O", "X", "X", "X"],
    ["O", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "O", "X", "X", "X"],
    ["X", "O", "O", "X", "X", "O", "X", "X", "O", "O"],
    ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
  ];
  const expected = [
    ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
    ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "O", "O"],
    ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
  ];
  solve(board);
  assertEquals(board, expected);
});
