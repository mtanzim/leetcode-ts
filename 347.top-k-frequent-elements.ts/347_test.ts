import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import topKFrequent from "./347.top-k-frequent-elements.ts";

Deno.test("basic", () => {
  const expect = [1, 2];
  const res = topKFrequent([1, 1, 2, 2, 3], 2);
  console.log(res);
  assertEquals(res, expect);
});
