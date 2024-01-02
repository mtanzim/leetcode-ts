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
  canAttendMeetings(intervals) {
    const is = intervals.slice().sort((a, b) => a.start - b.start);
    for (let i = 1; i < is.length; i++) {
      if (is[i - 1].end > is[i].start) {
        return false;
      }
    }
    return true;
  }
}

Deno.test("basic", () => {
  const intervals = [
    new Interval(15, 20),
    new Interval(0, 30),
    new Interval(5, 10),
  ];
  const expect = false;
  assertEquals(new Solution().canAttendMeetings(intervals), expect);
});

Deno.test("basic 2", () => {
  const intervals = [new Interval(5, 8), new Interval(9, 15)];
  const expect = true;
  assertEquals(new Solution().canAttendMeetings(intervals), expect);
});
