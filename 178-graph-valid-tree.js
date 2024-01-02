import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

export class Solution {
  makeAdj(n, edges) {
    const adjList = [];
    for (let i = 0; i < n; i++) {
      adjList[i] = [];
    }
    // undirected graph
    edges.forEach(([from, to]) => {
      adjList[from].push(to);
      adjList[to].push(from);
    });
    return adjList;
  }

  checkCycle(adj, cur, prev, visited) {
    // NOTE: this only works when we expect a tree
    // since there is a single connected component
    if (visited.has(cur)) {
      return true;
    }

    visited.add(cur);
    const neighbors = adj[cur];
    return (
      neighbors
        // NOTE: this is the trick to check for cycles in an undirected graph
        .filter((n) => n !== prev)
        .map((n) => {
          return this.checkCycle(adj, n, cur, visited);
        })
        .some((r) => !!r)
    );
  }

  /**
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
  validTree(n, edges) {
    const visited = new Set();
    const hasCycle = this.checkCycle(this.makeAdj(n, edges), 0, -1, visited);
    return !hasCycle && visited.size === n;
  }
}

Deno.test("failing", () => {
  const n = 5;
  const e = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ];
  const output = new Solution().validTree(n, e);
  const expected = false;
  assertEquals(output, expected);
});
