import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-xpathresult
 *
 * [Exposed=Window]
 * interface XPathResult {
 *   const unsigned short ANY_TYPE = 0;
 *   const unsigned short NUMBER_TYPE = 1;
 *   const unsigned short STRING_TYPE = 2;
 *   const unsigned short BOOLEAN_TYPE = 3;
 *   const unsigned short UNORDERED_NODE_ITERATOR_TYPE = 4;
 *   const unsigned short ORDERED_NODE_ITERATOR_TYPE = 5;
 *   const unsigned short UNORDERED_NODE_SNAPSHOT_TYPE = 6;
 *   const unsigned short ORDERED_NODE_SNAPSHOT_TYPE = 7;
 *   const unsigned short ANY_UNORDERED_NODE_TYPE = 8;
 *   const unsigned short FIRST_ORDERED_NODE_TYPE = 9;
 *
 *   readonly attribute unsigned short resultType;
 *   readonly attribute unrestricted double numberValue;
 *   readonly attribute DOMString stringValue;
 *   readonly attribute boolean booleanValue;
 *   readonly attribute Node? singleNodeValue;
 *   readonly attribute boolean invalidIteratorState;
 *   readonly attribute unsigned long snapshotLength;
 *
 *   Node? iterateNext();
 *   Node? snapshotItem(unsigned long index);
 * };
 */
class XPathResult {
    static readonly ANY_TYPE = 0;
    static readonly NUMBER_TYPE = 1;
    static readonly STRING_TYPE = 2
    static readonly BOOLEAN_TYPE = 3
    static readonly UNORDERED_NODE_ITERATOR_TYPE = 4
    static readonly ORDERED_NODE_ITERATOR_TYPE = 5
    static readonly UNORDERED_NODE_SNAPSHOT_TYPE = 6
    static readonly ORDERED_NODE_SNAPSHOT_TYPE = 7
    static readonly ANY_UNORDERED_NODE_TYPE = 8
    static readonly FIRST_UNORDERED_NODE_TYPE = 9


    get resultType(): number { throw ""; }

    get numberValue(): number { throw ""; }

    get stringValue(): string { throw ""; }

    get booleanValue(): boolean { throw ""; }

    get singleNodeValue(): Node | null { throw ""; }

    get invalidIteratorState(): boolean { throw ""; }

    get snapshotLength(): number { throw ""; }


    iterateNext(): Node | null { throw ""; }

    snapshotItem(index: number): Node | null { throw ""; }
}

export default XPathResult;
