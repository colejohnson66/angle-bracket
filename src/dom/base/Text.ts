import CharacterData from "./CharacterData";
import Slottable from "./mixin/Slottable";
import { applyMixins } from "../../applyMixins";

/* https://dom.spec.whatwg.org/#interface-text
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
    constructor(data: string = "") {
        super();
        throw "";
    }


    splitText(offset: number): Text { throw ""; }

    get wholeText(): string { throw ""; }
}

applyMixins(Text, Slottable);

export default Text;
