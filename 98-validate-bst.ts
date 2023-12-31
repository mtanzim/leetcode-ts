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

function isValidBST(root: TreeNode | null): boolean {
  function traverse(root: TreeNode | null, min: number, max: number): boolean {
    if (!root) {
      return true;
    }
    if (root.val >= max || root.val <= min) {
      return false;
    }
    return traverse(root.left, min, root.val) &&
      traverse(root.right, root.val, max);
  }
  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
