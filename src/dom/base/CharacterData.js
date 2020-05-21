import ChildNode from "./mixin/ChildNode";
import Node from "./Node";
import NonDocumentTypeChildNode from "./mixin/NonDocumentTypeChildNode";

/* Implements https://dom.spec.whatwg.org/#characterdata
 *
 * [Exposed=Window]
 * interface CharacterData : Node {
 *   attribute [LegacyNullToEmptyString] DOMString data;
 *   readonly attribute unsigned long length;
 *   DOMString substringData(unsigned long offset, unsigned long count);
 *   void appendData(DOMString data);
 *   void insertData(unsigned long offset, DOMString data);
 *   void deleteData(unsigned long offset, unsigned long count);
 *   void replaceData(unsigned long offset, unsigned long count, DOMString data);
 * };
 */
class CharacterData extends Node {
    get data() { }
    set data(value) { }
    get length() { }
    substringData(offset, count) { }
    appendData(data) { }
    insertData(offset, data) { }
    deleteData(offset, count) { }
    replaceData(offset, count, data) { }
}

Object.assign(CharacterData.prototype, ChildNode);
Object.assign(CharacterData.prototype, NonDocumentTypeChildNode);

export default CharacterData;
