import Element from "../Element";

/* https://dom.spec.whatwg.org/#interface-nonelementparentnode
 *
 * interface mixin NonElementParentNode {
 *   Element? getElementById(DOMString elementId);
 * };
 * Document includes NonElementParentNode;
 * DocumentFragment includes NonElementParentNode;
 */
class NonElementParentNode {
    getElementById(elementId: string): Element | null { throw ""; }
}

export default NonElementParentNode;
