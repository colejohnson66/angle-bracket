/* https://dom.spec.whatwg.org/#interface-nodelist
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
    item(index: number): Node | null { throw ""; }

    get length(): number { throw ""; }

    [Symbol.iterator]() { throw ""; }
}

export default NodeList;
