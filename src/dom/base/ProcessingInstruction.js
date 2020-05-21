import CharacterData from "./CharacterData";

/* Implements https://dom.spec.whatwg.org/#processinginstruction
 *
 * [Exposed=Window]
 * interface ProcessingInstruction : CharacterData {
 *   readonly attribute DOMString target;
 * };
 */
class ProcessingInstruction extends CharacterData {
    get target() { }
}

export default ProcessingInstruction;
