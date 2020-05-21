/* Implements https://dom.spec.whatwg.org/#htmlcollection
 *
 * [Exposed=Window, LegacyUnenumerableNamedProperties]
 * interface HTMLCollection {
 *   readonly attribute unsigned long length;
 *   getter Element? item(unsigned long index);
 *   getter Element? namedItem(DOMString name);
 * };
 */
// NOTE: Can't overload the [] operator for `item` and `namedItem`
// TODO: Proxies?
class HTMLCollection {
    get length() { }
    item(index) { }
    namedItem(index) { }
}

export default HTMLCollection;
