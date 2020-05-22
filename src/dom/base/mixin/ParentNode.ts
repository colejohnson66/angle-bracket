import Element from "../Element";
import HTMLCollection from "../HTMLCollection";
import NodeList from "../NodeList";

/* https://dom.spec.whatwg.org/#interface-parentnode
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
class ParentNode {
    get children(): HTMLCollection { throw ""; }

    get firstElementChild(): Element | null { throw ""; }

    get lastElementChild(): Element | null { throw ""; }

    get childElementCount(): number { throw ""; }


    prepend(...nodes: Node[] | string[]): void { throw ""; }

    append(...nodes: Node[] | string[]): void { throw ""; }

    replaceChildren(...nodes: Node[] | string[]): void { throw ""; }


    querySelector(selectors: string): Element | null { throw ""; }

    querySelectorAll(selectors: string): NodeList { throw ""; }
}

export default ParentNode;
