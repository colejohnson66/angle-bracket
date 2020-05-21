/* Implements https://dom.spec.whatwg.org/#namednodemap
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
    get length() { }
    item(index) { }
    getNamedItem(qualifiedName) { }
    getNamedItemNS(namespace, localName) { }
    setNamedItem(attr) { }
    setNamedItemNS(attr) { }
    removeNamedItem(qualifiedName) { }
    removeNamedItemNS(namespace, localName) { }
}

export default NamedNodeMap;
