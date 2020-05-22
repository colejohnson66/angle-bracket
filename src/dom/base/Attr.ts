import Element from "./Element";
import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-attr
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
    get namespaceURI(): string | null { throw ""; }

    get prefix(): string | null { throw ""; }

    get localName(): string { throw ""; }

    get name(): string { throw ""; }

    get value(): string { throw ""; }

    set value(value: string) { throw ""; }


    get ownerElement(): Element { throw ""; }


    get specified(): boolean { return true; }
}

export default Attr;
