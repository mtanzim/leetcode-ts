class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function dfs(node: Node | null, visited: Set<number>): Node | null {
  if (!node) {
    return null;
  }
  if (visited.has(node.val)) {
    return null;
  }
  visited.add(node.val);
  const neighbors = node.neighbors.map((n) => dfs(n, visited)).filter(
    Boolean,
  ) as Node[];
  return new Node(node.val, neighbors);
}

function cloneGraph(node: Node | null): Node | null {
  return dfs(node, new Set());
}

Deno.test("basic", () => {
  const nodes = [[2, 4], [1, 3], [2, 4], [1, 3]];
  const nodesOnly = [];
  for (let i = 0; i < nodes.length; i++) {
    nodesOnly[i] = new Node(i + 1);
  }
  for (let i = 0; i < nodes.length; i++) {
    const curNode = nodesOnly[i];
    curNode.neighbors = nodes[i].map((n) => nodesOnly[n-1]);
  }
  console.log(nodesOnly);
  const cloned = cloneGraph(nodesOnly[0]);
  console.log(cloned);
});
