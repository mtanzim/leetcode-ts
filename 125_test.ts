import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import isPalindrome from "./125.valid-palindrome.ts";

Deno.test("simple", () => {
  const res = isPalindrome("A man, a plan, a canal: Panama");
  const expect = true;
  assertEquals(res, expect);
});

Deno.test("failing", () => {
  const res = isPalindrome("ab_a");
  const expect = true;
  assertEquals(res, expect);
});
