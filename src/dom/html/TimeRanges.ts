/* https://html.spec.whatwg.org/multipage/media.html#time-ranges
 *
 * [Exposed=Window]
 * interface TimeRanges {
 *   readonly attribute unsigned long length;
 *   double start(unsigned long index);
 *   double end(unsigned long index);
 * };
 */
class TimeRanges {
    get length(): number { throw ""; }

    start(index: number): number { throw ""; }

    end(index: number): number { throw ""; }
}

export default TimeRanges;
