/* Implements https://dom.spec.whatwg.org/#treewalker
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
    get root() { }
    get whatToShow() { }
    get filter() { }
    get currentNode() { }

    parentNode() { }
    firstChild() { }
    lastChild() { }
    previousSibling() { }
    nextSibling() { }
    previousNode() { }
    nextNode() { }
}

export default TreeWalker;
