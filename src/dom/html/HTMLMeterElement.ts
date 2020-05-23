import HTMLElement from "./HTMLElement";
import { NodeList } from "../base/index";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element
 *
 * [Exposed=Window]
 * interface HTMLMeterElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute double value;
 *   [CEReactions] attribute double min;
 *   [CEReactions] attribute double max;
 *   [CEReactions] attribute double low;
 *   [CEReactions] attribute double high;
 *   [CEReactions] attribute double optimum;
 *   readonly attribute NodeList labels;
 * };
 */
class HTMLMeterElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get value(): number { throw ""; }
    set value(value: number) { throw ""; }

    get min(): number { throw ""; }
    set min(value: number) { throw ""; }

    get max(): number { throw ""; }
    set max(value: number) { throw ""; }

    get low(): number { throw ""; }
    set low(value: number) { throw ""; }

    get high(): number { throw ""; }
    set high(value: number) { throw ""; }

    get optimum(): number { throw ""; }
    set optimum(value: number) { throw ""; }

    get labels(): NodeList { throw ""; }
}

export default HTMLMeterElement;
