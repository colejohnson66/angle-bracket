import CharacterData from "./CharacterData";

/* https://dom.spec.whatwg.org/#interface-processinginstruction
 *
 * [Exposed=Window]
 * interface ProcessingInstruction : CharacterData {
 *   readonly attribute DOMString target;
 * };
 */
class ProcessingInstruction extends CharacterData {
    get target(): string { throw ""; }
}

export default ProcessingInstruction;
