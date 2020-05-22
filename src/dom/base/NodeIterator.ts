import Node from "./Node";
import NodeFilter from "./NodeFilter";

/* https://dom.spec.whatwg.org/#interface-nodeiterator
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
    get root(): Node { throw ""; }

    get referenceNode(): Node { throw ""; }

    get pointerBeforeReferenceNode(): boolean { throw ""; }

    get whatToShow(): number { throw ""; }

    get filter(): NodeFilter | null { throw ""; }



    nextNode(): Node | null { throw ""; }

    previousNode(): Node | null { throw ""; }


    detach(): void { throw ""; }
}

export default NodeIterator;
