import CharacterData from "./CharacterData";
import Slottable from "./mixin/Slottable";

/* Implements https://dom.spec.whatwg.org/#text
 *
 * [Exposed=Window]
 * interface Text : CharacterData {
 *   constructor(optional DOMString data = "");
 *
 *   [NewObject] Text splitText(unsigned long offset);
 *   readonly attribute DOMString wholeText;
 * };
 */
class Text extends CharacterData {
    constructor(data = "") { }

    splitText(offset) { }
    get wholeText() { }
}

Object.assign(Text.prototype, Slottable);

export default Text;
