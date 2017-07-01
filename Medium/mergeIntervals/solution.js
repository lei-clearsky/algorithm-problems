// first check if the intervals array has any items
// second sort the interval array using the Array sort() method
// create two variables, one to store the previousInterval and one for the result which will be a new array
// next loop through the intervals array
// evaluate the start of the current interval with the previous end
// if the current start is less than or equal to the previous end, then change the previous end to be the bigger of previous end or current end
// else add the current interval to the result array and change the previous pointer to the current interval
// last when the all the intervals are evaluated, return the result array

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function merge(intervals) {
    if (intervals.length < 2) return intervals;
    
    intervals.sort((a,b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
    
    var previousInterval = intervals[0];
    var result = [previousInterval];
    
    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i].start <= previousInterval.end) {
            previousInterval.end = Math.max(previousInterval.end, intervals[i].end);
        } else {
            result.push(intervals[i]);
            previousInterval = intervals[i];
        }
    }
    
    return result;
}