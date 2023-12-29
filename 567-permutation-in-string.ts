// test.ts
import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

Deno.test("basic", () => {
  const s1 = "ab";
  const s2 = "eidbaooo";
  const expect = true;
  assertEquals(checkInclusion(s1, s2), expect);
});
Deno.test("failing", () => {
  const s1 = "adc";
  const s2 = "dcda";

  const expect = true;
  assertEquals(checkInclusion(s1, s2), expect);
});
Deno.test("basic 2", () => {
  const s1 = "ab";
  const s2 = "eidboaoo";

  const expect = false;
  assertEquals(checkInclusion(s1, s2), expect);
});

function checkInclusion(s1: string, s2: string): boolean {
  let [i1, i2] = [0, 0];
  let hm1 = makeHm(s1);

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
  let previ2 = 0;
  while (i2 < s2.length) {
    if (i1 === s1.length) {
      return true;
    }
    if (hm1[s2[i2]]) {
      if (i1 === 0) {
        previ2 = i2;
      }
      i1++;
      hm1[s2[i2]]--;
    } else {
      if (i1 > 0) {
        i1 = 0;
        hm1 = makeHm(s1);
        i2 = previ2;
      }
    }
    i2++;
  }
  return i1 === s1.length;
}
