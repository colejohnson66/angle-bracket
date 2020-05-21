/* Implements https://dom.spec.whatwg.org/#nodeiterator
 *
 * [Exposed=Window]
 * interface NodeIterator {
 *   [SameObject] readonly attribute Node root;
 *   readonly attribute Node referenceNode;
 *   readonly attribute boolean pointerBeforeReferenceNode;
 *   readonly attribute unsigned long whatToShow;
 *   readonly attribute NodeFilter? filter;
 *
 *   Node? nextNode();
 *   Node? previousNode();
 *
 *   void detach();
 * };
 */
class NodeIterator {
    get root() { }
    get referenceNode() { }
    get pointerBeforeReferenceNode() { }
    get whatToShow() { }
    get filter() { }

    nextNode() { }
    previousNode() { }

    detach() { }
}

export default NodeIterator;
