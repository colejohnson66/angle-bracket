import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-title-element
 *
 * [Exposed=Window]
 * interface HTMLTitleElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *  [CEReactions] attribute DOMString text;
 * };
 */
class HTMLTitleElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get text(): string { throw ""; }
    set text(value: string) { throw ""; }
}

export default HTMLTitleElement;
