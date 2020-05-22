import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-abstractrange
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
    get startContainer(): Node { throw ""; }

    get startOffset(): number { throw ""; }

    get endContainer(): Node { throw ""; }

    get endOffset(): number { throw ""; }

    get collapsed(): boolean { throw ""; }
}

export default AbstractRange;
