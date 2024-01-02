// https://www.lintcode.com/problem/920/

import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

//  Definition of Interval:
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  minMeetingRooms(intervals) {
    const times = intervals
      .flatMap((i) => [
        { time: i.start, type: "start" },
        { time: i.end, type: "end" },
      ])
      .sort((a, b) => a.time - b.time);
    let max = Number.MIN_SAFE_INTEGER;
    let count = 0;
    for (const t of times) {
      if (t.type === "start") {
        count++;
      } else if (t.type === "end") {
        count--;
      }
      max = Math.max(max, count);
    }
    return max;
  }
}

Deno.test("basic", () => {
  const intervals = [
    new Interval(0, 30),
    new Interval(5, 10),
    new Interval(15, 20),
  ];
  const expect = 2;
  assertEquals(new Solution().minMeetingRooms(intervals), expect);
});

Deno.test("basic 2", () => {
  const intervals = [new Interval(2, 7)];
  const expect = 1;
  assertEquals(new Solution().minMeetingRooms(intervals), expect);
});
