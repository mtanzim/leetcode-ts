import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
Deno.test("basic", () => {
  const arr = [4, 5, 6, 7, 0, 1, 2];
  const target = 0;
  const expect = 4;
  assertEquals(search(arr, target), expect);
});

function search(nums: number[], target: number): number {
  const minIdx = findMin(nums);
  const arrSorted = nums.slice(minIdx).concat(nums.slice(0, minIdx));
  // binary search now
  let [l, r] = [0, arrSorted.length - 1];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const mv = arrSorted[mid];
    if (target > mv) {
      l = mid + 1;
    } else if (target < mv) {
      r = mid - 1;
    } else {
      return (mid + minIdx) % nums.length;
    }
  }
  return -1;
}

function findMin(nums: number[]): number {
  let [l, r] = [0, nums.length - 1];
  let resIdx = 0;
  while (l <= r) {
    const [lv, rv] = [nums[l], nums[r]];
    if (lv < rv) {
      if (nums[resIdx] > lv) {
        resIdx = l;
      }
      break;
    }
    const mid = Math.floor((l + r) / 2);
    const mv = nums[mid];
    if (nums[resIdx] > mv) {
      resIdx = mid;
    }
    if (mv >= lv) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return resIdx;
}
