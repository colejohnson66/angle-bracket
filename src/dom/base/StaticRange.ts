import AbstractRange from "./AbstractRange";
import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-staticrange
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
class StaticRangeInit {
    startContainer: Node;
    startOffset: number;
    endContainer: Node;
    endOffset: number;
}

class StaticRange extends AbstractRange {
    constructor(init) {
        super();
        throw "";
    }
}

export { StaticRangeInit };
export default StaticRange;
