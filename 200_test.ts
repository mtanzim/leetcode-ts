import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { numIslands } from "./200.number-of-islands.ts";

Deno.test("basic", () => {
  const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];

  const res = numIslands(grid);
  assertEquals(res, 1);
});

Deno.test("basic 2", () => {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];

  const res = numIslands(grid);
  assertEquals(res, 3);
});

Deno.test("failing 1", () => {
  const grid = [["1"], ["1"]];
  const res = numIslands(grid);
  assertEquals(res, 1);
});
