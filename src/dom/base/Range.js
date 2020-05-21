import AbstractRange from "./AbstractRange";

/* Implements https://dom.spec.whatwg.org/#range
 *
 * [Exposed=Window]
 * interface Range : AbstractRange {
 *   constructor();
 *
 *   readonly attribute Node commonAncestorContainer;
 *
 *   void setStart(Node node, unsigned long offset);
 *   void setEnd(Node node, unsigned long offset);
 *   void setStartBefore(Node node);
 *   void setStartAfter(Node node);
 *   void setEndBefore(Node node);
 *   void setEndAfter(Node node);
 *   void collapse(optional boolean toStart = false);
 *   void selectNode(Node node);
 *   void selectNodeContents(Node node);
 *
 *   const unsigned short START_TO_START = 0;
 *   const unsigned short START_TO_END = 1;
 *   const unsigned short END_TO_END = 2;
 *   const unsigned short END_TO_START = 3;
 *   short compareBoundaryPoints(unsigned short how, Range sourceRange);
 *
 *   [CEReactions] void deleteContents();
 *   [CEReactions, NewObject] DocumentFragment extractContents();
 *   [CEReactions, NewObject] DocumentFragment cloneContents();
 *   [CEReactions] void insertNode(Node node);
 *   [CEReactions] void surroundContents(Node newParent);
 *
 *   [NewObject] Range cloneRange();
 *   void detach();
 *
 *   boolean isPointInRange(Node node, unsigned long offset);
 *   short comparePoint(Node node, unsigned long offset);
 *
 *   boolean intersectsNode(Node node);
 *
 *   stringifier;
 * };
 */
class Range extends AbstractRange {
    constructor() { }

    get commonAncestorContainer() { }

    setStart(node, offset) { }
    setEnd(node, offset) { }
    setStartBefore(node) { }
    setStartAfter(node) { }
    setEndBefore(node) { }
    setEndAfter(node) { }
    collapse(toStart = false) { }
    selectNode(node) { }
    selectNodeContents(node) { }

    static get START_TO_START() { return 0; }
    static get START_TO_END() { return 1; }
    static get END_TO_END() { return 2; }
    static get END_TO_START() { return 3; }
    compareBoundaryPoints(how, sourceRange) { }

    deleteContents() { }
    extractContents() { }
    cloneContents() { }
    insertNode(node) { }
    surroundContents(newParent) { }

    cloneRange() { }
    detach() { }

    isPointInRange(node, offset) { }
    comparePoint(node, offset) { }

    intersectsNode(node) { }

    toString() { }
}

export default Range;
