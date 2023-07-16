/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (44.74%)
 * Likes:    7388
 * Dislikes: 7414
 * Total Accepted:    2.1M
 * Total Submissions: 4.6M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric
 * characters.
 * Since an empty string reads the same forward and backward, it is a
 * palindrome.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 *
 *
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const sPrime = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  console.log(sPrime);
  let left = 0;
  let right = sPrime.length - 1;
  while (left < right) {
    if (sPrime[left] !== sPrime[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
// @lc code=end
export default isPalindrome;
