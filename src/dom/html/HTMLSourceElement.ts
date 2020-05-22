import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
 *
 * [Exposed=Window]
 * interface HTMLSourceElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString src;
 *   [CEReactions] attribute DOMString type;
 *   [CEReactions] attribute USVString srcset;
 *   [CEReactions] attribute DOMString sizes;
 *   [CEReactions] attribute DOMString media;
 * };
 */
class HTMLSourceElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }

    get srcset(): string { throw ""; }
    set srcset(value: string) { throw ""; }

    get sizes(): string { throw ""; }
    set sizes(value: string) { throw ""; }

    get media(): string { throw ""; }
    set media(value: string) { throw ""; }
}

export default HTMLSourceElement;
