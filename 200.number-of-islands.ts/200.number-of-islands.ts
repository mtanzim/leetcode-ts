/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (57.28%)
 * Likes:    20737
 * Dislikes: 450
 * Total Accepted:    2.2M
 * Total Submissions: 3.9M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 *
 *
 */

// @lc code=start
type Coord = { rowIdx: number; colIdx: number };

const cToS = (c: Coord): string => {
  return `${c.rowIdx}-${c.colIdx}`;
};

const sToC = (s: string): Coord => {
  const [rowIdx, colIdx] = s.split("-").map(Number);
  return { rowIdx, colIdx };
};

export function numIslands(grid: string[][]): number {
  const maxRow = grid.length - 1;
  const maxCol = grid?.[0]?.length - 1;
  if (maxCol < 0) {
    throw new Error("invalid state");
  }
  const minCol = 0;
  const minRow = 0;

  const isValidCoord = ({ rowIdx, colIdx }: Coord) => {
    return (
      rowIdx >= minRow &&
      rowIdx <= maxRow &&
      colIdx >= minCol &&
      colIdx <= maxCol
    );
  };

  const isMarkedCoord = (c: Coord, marked: Set<string>) => {
    return marked.has(cToS(c));
  };

  const isLand = (item: string) => item === "1";

  const dfs = (c: Coord, marked: Set<string>) => {
    marked.add(cToS(c));
    const { rowIdx, colIdx } = c;
    const neighbors: Coord[] = [
      { rowIdx: rowIdx - 1, colIdx },
      { rowIdx: rowIdx + 1, colIdx },
      { rowIdx, colIdx: colIdx + 1 },
      { rowIdx, colIdx: colIdx - 1 },
    ]
      .filter(isValidCoord)
      .filter((c) => !isMarkedCoord(c, marked))
      .filter(({ rowIdx, colIdx }) => isLand(grid[rowIdx][colIdx]));
    neighbors.forEach((c) => dfs(c, marked));
  };

  let count = 0;
  const markedOverall = new Set<string>();
  grid.forEach((row, rowIdx) => {
    row.forEach((item, colIdx) => {
      if (item === "1" && !markedOverall.has(cToS({ rowIdx, colIdx }))) {
        console.log(`Starting dfs id ${count} for: `, { rowIdx, colIdx });
        dfs({ rowIdx, colIdx }, markedOverall);
        console.log(`Marked after id ${count}`);
        markedOverall.forEach((v) => console.log(sToC(v)));
        count++;
        return;
      }
    });
  });
  return count;
}
// @lc code=end
