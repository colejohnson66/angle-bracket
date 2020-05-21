import AbstractRange from "./AbstractRange";

/* Implements https://dom.spec.whatwg.org/#staticrange
 *
 * dictionary StaticRangeInit {
 *   required Node startContainer;
 *   required unsigned long startOffset;
 *   required Node endContainer;
 *   required unsigned long endOffset;
 * };
 *
 * [Exposed=Window]
 * interface StaticRange : AbstractRange {
 *   constructor(StaticRangeInit init);
 * };
 */
class StaticRange extends AbstractRange {
    constructor(init) { }
}

export default StaticRange;
