import ChildNode from "./mixin/ChildNode";
import Node from "./Node";
import { applyMixins } from "../../applyMixins";

/* https://dom.spec.whatwg.org/#interface-documenttype
 *
 * [Exposed=Window]
 * interface DocumentType : Node {
 *   readonly attribute DOMString name;
 *   readonly attribute DOMString publicId;
 *   readonly attribute DOMString systemId;
 * };
 */
class DocumentType extends Node {
    get name(): string { throw ""; }

    get publicId(): string { throw ""; }

    get systemId(): string { throw ""; }
}

applyMixins(DocumentType, ChildNode);

export default DocumentType;
