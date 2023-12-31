//  Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const hm: Record<number, number[]> = {};
  function traverse(curNode: TreeNode | null, curHeight: number) {
    if (!curNode) {
      return;
    }
    if (hm[curHeight] !== undefined) {
      hm[curHeight].push(curNode.val);
    } else {
      hm[curHeight] = [curNode.val];
    }
    traverse(curNode.left, curHeight + 1);
    traverse(curNode.right, curHeight + 1);
  }
  traverse(root, 0);
  return Object.values(hm);
}
