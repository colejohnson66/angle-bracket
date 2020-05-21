import Node from "./Node";

/* Implements https://dom.spec.whatwg.org/#attr
 *
 * [Exposed=Window]
 * interface Attr : Node {
 *   readonly attribute DOMString? namespaceURI;
 *   readonly attribute DOMString? prefix;
 *   readonly attribute DOMString localName;
 *   readonly attribute DOMString name;
 *   [CEReactions] attribute DOMString value;
 *
 *   readonly attribute Element? ownerElement;
 *
 *   readonly attribute boolean specified; // useless; always returns true
 * };
 */
class Attr extends Node {
    get namespaceURI() { }
    get prefix() { }
    get localName() { }
    get name() { }
    get value() { }

    get ownerElement() { }

    get specified() { return true; }
}

export default Attr;
