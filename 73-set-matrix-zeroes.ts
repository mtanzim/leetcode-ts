import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rows = new Set<number>();
  const cols = new Set<number>();
  matrix.forEach((row, ri) => {
    row.forEach((v, ci) => {
      if (v === 0) {
        rows.add(ri);
        cols.add(ci);
      }
    });
  });
  matrix.forEach((row, ri) => {
    row.forEach((_v, ci) => {
      if (rows.has(ri) || cols.has(ci)) {
        matrix[ri][ci] = 0;
      }
    });
  });
}

Deno.test("basic", () => {
  const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  const expect = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]];
  setZeroes(matrix);
  assertEquals(matrix, expect);
});
