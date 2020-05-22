import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-style-element
 *
 * [Exposed=Window]
 * interface HTMLStyleElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString media;
 * };
 * HTMLStyleElement includes LinkStyle;
 */
class HTMLStyleElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get media(): string { throw ""; }
    set media(value: string) { throw ""; }
}

// TODO: apply mixin

export default HTMLStyleElement;
