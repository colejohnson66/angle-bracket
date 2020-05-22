import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element
 *
 * [Exposed=Window]
 * interface HTMLLIElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute long value;
 * };
 */
class HTMLLIElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get value(): number { throw ""; }
    set value(value: number) { throw ""; }
}

export default HTMLLIElement;
