/* Implements https://dom.spec.whatwg.org/#domtokenlist
 *
 * [Exposed=Window]
 * interface DOMTokenList {
 *   readonly attribute unsigned long length;
 *   getter DOMString? item(unsigned long index);
 *   boolean contains(DOMString token);
 *   [CEReactions] void add(DOMString... tokens);
 *   [CEReactions] void remove(DOMString... tokens);
 *   [CEReactions] boolean toggle(DOMString token, optional boolean force);
 *   [CEReactions] boolean replace(DOMString token, DOMString newToken);
 *   boolean supports(DOMString token);
 *   [CEReactions] stringifier attribute DOMString value;
 *   iterable<DOMString>;
 * };
 */
// NOTE: Can't overload the [] operator for `item`
// TODO: Proxies?
class DOMTokenList {
    get length() { }
    item(index) { }
    contains(token) { }
    add(...tokens) { }
    remove(...tokens) { }
    toggle(token, force) { }
    replace(token, newToken) { }
    supports(token) { }
    get value() { }
    [Symbol.iterator]() { }
}

export default DOMTokenList;
