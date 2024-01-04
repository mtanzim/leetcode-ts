import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function dfs(node: Node | null, visited: Map<number, Node>): Node | null {
  if (!node) {
    return null;
  }
  if (visited.has(node.val)) {
    return visited.get(node.val) || null;
  }
  const newNode = new Node(node.val);
  visited.set(node.val, newNode);
  newNode.neighbors = node.neighbors.map((n) => dfs(n, visited)).filter(
    Boolean,
  ) as Node[];
  return newNode;
}

function cloneGraph(node: Node | null): Node | null {
  return dfs(node, new Map());
}

Deno.test("basic", () => {
  const nodesArr = [[2, 4], [1, 3], [2, 4], [1, 3]];
  const nodesOnly: Node[] = [];
  for (let i = 0; i < nodesArr.length; i++) {
    nodesOnly[i] = new Node(i + 1);
  }
  for (let i = 0; i < nodesArr.length; i++) {
    const curNode = nodesOnly[i];
    curNode.neighbors = nodesArr[i].map((n) => nodesOnly[n - 1]);
  }
  const cloned = cloneGraph(nodesOnly[0]);
  const clonedArr: number[][] = [];
  const q = [cloned];
  const visited = new Set();
  // iterative dfs
  while (q.length > 0) {
    const cur = q.pop();
    if (!cur) {
      continue;
    }
    if (visited.has(cur)) {
      continue;
    }
    visited.add(cur);
    clonedArr[cur.val] = cur.neighbors.map((n) => n.val);
    cur.neighbors.forEach((n) => q.push(n));
  }
  const clonedArrAdjused = clonedArr.slice(1);
  assertEquals(clonedArrAdjused, nodesArr);
});
