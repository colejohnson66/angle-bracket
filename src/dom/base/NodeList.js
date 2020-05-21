/* Implements https://dom.spec.whatwg.org/#nodelist
 *
 * [Exposed=Window]
 * interface NodeList {
 *   getter Node? item(unsigned long index);
 *   readonly attribute unsigned long length;
 *   iterable<Node>;
 * };
 */
// NOTE: Can't overload the [] operator for `item`
// TODO: Proxies?
class NodeList {
    item(index) { }
    get length() { }
    [Symbol.iterator]() { }
}

export default NodeList;
