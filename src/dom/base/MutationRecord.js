/* Implements https://dom.spec.whatwg.org/#mutationrecord
 *
 * [Exposed=Window]
 * interface MutationRecord {
 *   readonly attribute DOMString type;
 *   [SameObject] readonly attribute Node target;
 *   [SameObject] readonly attribute NodeList addedNodes;
 *   [SameObject] readonly attribute NodeList removedNodes;
 *   readonly attribute Node? previousSibling;
 *   readonly attribute Node? nextSibling;
 *   readonly attribute DOMString? attributeName;
 *   readonly attribute DOMString? attributeNamespace;
 *   readonly attribute DOMString? oldValue;
 * };
 */
class MutationRecord {
    get type() { }
    get target() { }
    get addedNodes() { }
    get removedNodes() { }
    get previousSibling() { }
    get nextSibling() { }
    get attributeName() { }
    get attributeNamespace() { }
    get oldValue() { }
}

export default MutationRecord;
