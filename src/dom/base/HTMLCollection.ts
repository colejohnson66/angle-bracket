import Element from "./Element";

/* https://dom.spec.whatwg.org/#interface-htmlcollection
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
    get length(): number { throw ""; }

    item(index): Element | null { throw ""; }

    namedItem(index): Element | null { throw ""; }
}

export default HTMLCollection;
