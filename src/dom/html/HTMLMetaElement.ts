import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element
 *
 * [Exposed=Window]
 * interface HTMLMetaElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute DOMString httpEquiv;
 *   [CEReactions] attribute DOMString content;
 * };
 */
class HTMLMetaElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get httpEquiv(): string { throw ""; }
    set httpEquiv(value: string) { throw ""; }

    get content(): string { throw ""; }
    set content(value: string) { throw ""; }
}

export default HTMLMetaElement;
