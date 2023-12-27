/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (63.94%)
 * Likes:    15165
 * Dislikes: 538
 * Total Accepted:    1.6M
 * Total Submissions: 2.5M
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size.
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const hm: Record<number, number> = {};
  nums.forEach((n) => {
    if (hm?.[n]) {
      hm[n] = hm[n] + 1;
      return;
    }
    hm[n] = 1;
  });
  return Object.entries(hm)
    .sort(([, va], [, vb]) => vb - va)
    .map(([k]) => k)
    .slice(0, k)
    .map(Number);
}
// @lc code=end
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

Deno.test("basic", () => {
  const expect = [1, 2];
  const res = topKFrequent([1, 1, 2, 2, 3], 2);
  console.log(res);
  assertEquals(res, expect);
});
