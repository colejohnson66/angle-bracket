import ChildNode from "./mixin/ChildNode";
import Node from "./Node";

/* Implements https://dom.spec.whatwg.org/#documenttype
 *
 * [Exposed=Window]
 * interface DocumentType : Node {
 *   readonly attribute DOMString name;
 *   readonly attribute DOMString publicId;
 *   readonly attribute DOMString systemId;
 * };
 */
class DocumentType extends Node {
    get name() { }
    get publicId() { }
    get systemId() { }
}

Object.assign(DocumentType.prototype, ChildNode);

export default DocumentType;
