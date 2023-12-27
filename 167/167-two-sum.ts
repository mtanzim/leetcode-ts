import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const cur = numbers[l] + numbers[r];
    if (cur === target) {
      return [l + 1, r + 1];
    }
    if (cur > target) {
      r--;
      continue;
    }
    l++;
  }
  return [];
}

Deno.test("basic", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expect = [1, 2];
  assertEquals(twoSum(nums, target), expect);
});
