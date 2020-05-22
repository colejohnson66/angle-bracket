import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-base-element
 *
 * [Exposed=Window]
 * interface HTMLBaseElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString href;
 *   [CEReactions] attribute DOMString target;
 * };
 */
class HTMLBaseElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get href(): string { throw ""; }
    set href(value: string) { throw ""; }

    get target(): string { throw ""; }
    set target(value: string) { throw ""; }
}

export default HTMLBaseElement;
