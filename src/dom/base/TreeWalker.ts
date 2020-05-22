import Node from "./Node";
import NodeFilter from "./NodeFilter";

/* https://dom.spec.whatwg.org/#interface-treewalker
 *
 * [Exposed=Window]
 * interface TreeWalker {
 *   [SameObject] readonly attribute Node root;
 *   readonly attribute unsigned long whatToShow;
 *   readonly attribute NodeFilter? filter;
 *            attribute Node currentNode;
 *
 *   Node? parentNode();
 *   Node? firstChild();
 *   Node? lastChild();
 *   Node? previousSibling();
 *   Node? nextSibling();
 *   Node? previousNode();
 *   Node? nextNode();
 * };
 */
class TreeWalker {
    get root(): Node { throw ""; }

    get whatToShow(): number { throw ""; }

    get filter(): NodeFilter | null { throw ""; }

    get currentNode(): Node { throw ""; }



    parentNode(): Node | null { throw ""; }

    firstChild(): Node | null { throw ""; }

    lastChild(): Node | null { throw ""; }

    previousSibling(): Node | null { throw ""; }

    nextSibling(): Node | null { throw ""; }

    previousNode(): Node | null { throw ""; }

    nextNode(): Node | null { throw ""; }
}

export default TreeWalker;
