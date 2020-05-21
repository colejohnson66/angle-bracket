/* implements https://dom.spec.whatwg.org/#xpathresult
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
    static get ANY_TYPE() { return 0; }
    static get NUMBER_TYPE() { return 1; }
    static get STRING_TYPE() { return 2; }
    static get BOOLEAN_TYPE() { return 3; }
    static get UNORDERED_NODE_ITERATOR_TYPE() { return 4; }
    static get ORDERED_NODE_ITERATOR_TYPE() { return 5; }
    static get UNORDERED_NODE_SNAPSHOT_TYPE() { return 6; }
    static get ORDERED_NODE_SNAPSHOT_TYPE() { return 7; }
    static get ANY_UNORDERED_NODE_TYPE() { return 8; }
    static get FIRST_UNORDERED_NODE_TYPE() { return 9; }

    get resultType() { }
    get numberValue() { }
    get stringValue() { }
    get booleanValue() { }
    get singleNodeValue() { }
    get invalidIteratorState() { }
    get snapshotLength() { }

    iterateNext() { }
    snapshotItem(index) { }
}

export default XPathResult;
