import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element
 *
 * [Exposed=Window]
 * interface HTMLTableColElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute unsigned long span;
 * };
 */
class HTMLTableColElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get span(): number { throw ""; }
    set span(value: number) { throw ""; }
}

export default HTMLTableColElement;
