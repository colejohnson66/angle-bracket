import Node from "./Node";
import NodeList from "./NodeList";

/* https://dom.spec.whatwg.org/#interface-mutationrecord
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
    get type(): string { throw ""; }

    get target(): Node { throw ""; }

    get addedNodes(): NodeList { throw ""; }

    get removedNodes(): NodeList { throw ""; }

    get previousSibling(): Node | null { throw ""; }

    get nextSibling(): Node | null { throw ""; }

    get attributeName(): string | null { throw ""; }

    get attributeNamespace(): string | null { throw ""; }

    get oldValue(): string | null { throw ""; }
}

export default MutationRecord;
