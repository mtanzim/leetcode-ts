// https://www.lintcode.com/problem/3651/

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

  bfs(adj, source, visited) {
    if (visited.has(source)) {
      return 0;
    }
    const q = [source];
    while (q.length > 0) {
      console.log({ q });
      const curNode = q.shift();
      if (visited.has(curNode)) {
        continue;
      }
      visited.add(curNode);
      const neighbors = adj[curNode];
      neighbors.forEach((n) => {
        if (visited.has(n)) {
          return;
        }
        q.push(n);
      });
    }
    return 1;
  }
  /**
   * @param n: the number of vertices
   * @param edges: the edges of undirected graph
   * @return: the number of connected components
   */
  countComponents(n, edges) {
    const adj = this.makeAdj(n, edges);
    const visited = new Set();
    let connectedComponents = 0;
    for (let i = 0; i < n; i++) {
      connectedComponents += this.bfs(adj, i, visited);
    }
    return connectedComponents;
  }
}

Deno.test("test", () => {
  const n = 3;
  const e = [
    [0, 1],
    [0, 2],
  ];
  const output = new Solution().countComponents(n, e);
  const expected = 1;
  assertEquals(output, expected);
});
