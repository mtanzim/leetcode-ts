import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { isAnagram } from "./242.valid-anagram.ts";

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
