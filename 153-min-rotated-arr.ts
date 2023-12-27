import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

function findMin(nums: number[]): number {
  let [l, r] = [0, nums.length - 1];
  let res = nums[0];
  while (l <= r) {
    const [lv, rv] = [nums[l], nums[r]];
    if (lv < rv) {
      res = Math.min(res, lv);
      break;
    }
    const mid = Math.floor((l + r) / 2);
    const mv = nums[mid];
    res = Math.min(res, mv);
    if (mv >= lv) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
}

Deno.test("basic", () => {
  const arr = [3, 4, 5, 1, 2];
  const expect = 1;
  assertEquals(findMin(arr), expect);
});

Deno.test("basic 2", () => {
  const arr = [4, 5, 6, 7, 0, 1, 2];
  const expect = 0;
  assertEquals(findMin(arr), expect);
});
