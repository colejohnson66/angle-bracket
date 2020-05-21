/* Implements https://dom.spec.whatwg.org/#abstractrange
 *
 * [Exposed=Window]
 * interface AbstractRange {
 *   readonly attribute Node startContainer;
 *   readonly attribute unsigned long startOffset;
 *   readonly attribute Node endContainer;
 *   readonly attribute unsigned long endOffset;
 *   readonly attribute boolean collapsed;
 * };
 */
class AbstractRange {
    get startContainer() { }
    get startOffset() { }
    get endContainer() { }
    get endOffset() { }
    get collapsed() { }
}

export default AbstractRange;
