function productExceptSelf(nums: number[]): number[] {
  const prefix = [1];
  const postfix = [1];
  const reversed = nums.slice().reverse();
  for (let i = 1; i < nums.length; i++) {
    prefix.push(prefix[i - 1] * nums[i - 1]);
  }
  for (let i = 1; i < reversed.length; i++) {
    postfix.push(postfix[i - 1] * reversed[i - 1]);
  }
  const out = [];
  const postfixRev = postfix.slice().reverse();
  for (let i = 0; i < prefix.length; i++) {
    out.push(prefix[i] * postfixRev[i]);
  }
  return out;
}

export { productExceptSelf };
