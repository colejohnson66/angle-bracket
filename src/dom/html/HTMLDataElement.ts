import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element
 *
 * [Exposed=Window]
 * interface HTMLDataElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString value;
 * };
 */
class HTMLDataElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }
}

export default HTMLDataElement;
