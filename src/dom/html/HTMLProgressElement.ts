import HTMLElement from "./HTMLElement";
import { NodeList } from "../base/index";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element
 *
 * [Exposed=Window]
 * interface HTMLProgressElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute double value;
 *   [CEReactions] attribute double max;
 *   readonly attribute double position;
 *   readonly attribute NodeList labels;
 * };
 */
class HTMLProgressElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get value(): number { throw ""; }
    set value(value: number) { throw ""; }

    get max(): number { throw ""; }
    set max(value: number) { throw ""; }

    get position(): number { throw ""; }

    get labels(): NodeList { throw ""; }
}

export default HTMLProgressElement;
