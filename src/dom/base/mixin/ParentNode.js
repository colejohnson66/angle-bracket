/* Implements https://dom.spec.whatwg.org/#parentnode
 *
 * interface mixin ParentNode {
 *   [SameObject] readonly attribute HTMLCollection children;
 *   readonly attribute Element? firstElementChild;
 *   readonly attribute Element? lastElementChild;
 *   readonly attribute unsigned long childElementCount;
 *
 *   [CEReactions, Unscopable] void prepend((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void append((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void replaceChildren((Node or DOMString)... nodes);
 *
 *   Element? querySelector(DOMString selectors);
 *   [NewObject] NodeList querySelectorAll(DOMString selectors);
 * };
 * Document includes ParentNode;
 * DocumentFragment includes ParentNode;
 * Element includes ParentNode;
 */
const ParentNode = {
    get children() { },
    get firstElementChild() { },
    get lastElementChild() { },
    get childElementCount() { },

    prepend(nodes) { },
    append(nodes) { },
    replaceChildren(...nodes) { },

    querySelector(selectors) { },
    querySelectorAll(selectors) { }
};

export default ParentNode;
