/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (63.49%)
 * Likes:    11468
 * Dislikes: 363
 * Total Accepted:    3M
 * Total Submissions: 4.7M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  function makeHm(v: string): Record<string, number> {
    return v.split("").reduce((acc, cur) => {
      if (cur in acc) {
        return {
          ...acc,
          [cur]: acc[cur] + 1,
        };
      }
      return {
        ...acc,
        [cur]: 1,
      };
    }, {} as Record<string, number>);
  }
  const [shm, thm] = [makeHm(s), makeHm(t)];
  for (const k in shm) {
    if (shm[k] !== thm[k]) {
      return false;
    }
  }
  for (const k in thm) {
    if (thm[k] !== shm[k]) {
      return false;
    }
  }
  return true;
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

Deno.test({
  name: "a test case",
  fn() {
    const s = "anagram";
    const t = "nagaram";
    assertEquals(isAnagram(s, t), true);
  },
});

Deno.test({
  name: "another test case",
  fn() {
    const s = "rat";
    const t = "car";
    assertEquals(isAnagram(s, t), false);
  },
});
