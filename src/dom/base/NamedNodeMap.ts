import Attr from "./Attr";

/* https://dom.spec.whatwg.org/#interface-namednodemap
 *
 * [Exposed=Window,
 *  LegacyUnenumerableNamedProperties]
 * interface NamedNodeMap {
 *   readonly attribute unsigned long length;
 *   getter Attr? item(unsigned long index);
 *   getter Attr? getNamedItem(DOMString qualifiedName);
 *   Attr? getNamedItemNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] Attr? setNamedItem(Attr attr);
 *   [CEReactions] Attr? setNamedItemNS(Attr attr);
 *   [CEReactions] Attr removeNamedItem(DOMString qualifiedName);
 *   [CEReactions] Attr removeNamedItemNS(DOMString? namespace, DOMString localName);
 * };
 */
// NOTE: Can't overload the [] operator for `item` and `namedItem`
// TODO: Proxies?
class NamedNodeMap {
    get length(): number { throw ""; }

    item(index: number): Attr | null { throw ""; }

    getNamedItem(qualifiedName: string): Attr | null { throw ""; }

    getNamedItemNS(namespace: string | null, localName: string): Attr | null { throw ""; }

    setNamedItem(attr: Attr): Attr | null { throw ""; }

    setNamedItemNS(attr: Attr): Attr | null { throw ""; }

    removeNamedItem(qualifiedName: string): Attr { throw ""; }

    removeNamedItemNS(namespace: string | null, localName: string): Attr { throw ""; }
}

export default NamedNodeMap;
