import ChildNode from "./mixin/ChildNode";
import Node from "./Node";
import NonDocumentTypeChildNode from "./mixin/NonDocumentTypeChildNode";
import { applyMixins } from "../../applyMixins";

/* https://dom.spec.whatwg.org/#interface-characterdata
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
    get data(): string { throw ""; }
    set data(value: string) { throw ""; }

    get length(): number { throw ""; }

    substringData(offset: number, count: number) { throw ""; }

    appendData(data: string) { throw ""; }

    insertData(offset: number, data: number) { throw ""; }

    deleteData(offset: number, count: number) { throw ""; }

    replaceData(offset: number, count: number, data: string) { throw ""; }
}

applyMixins(CharacterData, [
    ChildNode,
    NonDocumentTypeChildNode
]);

export default CharacterData;
