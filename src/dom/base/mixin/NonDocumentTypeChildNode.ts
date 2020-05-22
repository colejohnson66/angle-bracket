import Element from "../Element";

/* https://dom.spec.whatwg.org/#interface-nondocumenttypechildnode
 *
 * interface mixin NonDocumentTypeChildNode {
 *   readonly attribute Element? previousElementSibling;
 *   readonly attribute Element? nextElementSibling;
 * };
 * Element includes NonDocumentTypeChildNode;
 * CharacterData includes NonDocumentTypeChildNode;
 */
class NonDocumentTypeChildNode {
    get previousElementSibling(): Element | null { throw ""; }

    get nextElementSibling(): Element | null { throw ""; }
}

export default NonDocumentTypeChildNode;
