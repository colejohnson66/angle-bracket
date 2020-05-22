import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-link-element
 *
 * [Exposed=Window]
 * interface HTMLLinkElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString href;
 *   [CEReactions] attribute DOMString? crossOrigin;
 *   [CEReactions] attribute DOMString rel;
 *   [CEReactions] attribute DOMString as; // (default "")
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;
 *   [CEReactions] attribute DOMString media;
 *   [CEReactions] attribute DOMString integrity;
 *   [CEReactions] attribute DOMString hreflang;
 *   [CEReactions] attribute DOMString type;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList sizes;
 *   [CEReactions] attribute USVString imageSrcset;
 *   [CEReactions] attribute DOMString imageSizes;
 *   [CEReactions] attribute DOMString referrerPolicy;
 * };
 * HTMLLinkElement includes LinkStyle;
 */
// TODO: relList and sizes is of type `DOMTokenList` and exists in base IDL
class HTMLLinkElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get href(): string { throw ""; }
    set href(value: string) { throw ""; }

    get crossOrigin(): string | null { throw ""; }
    set crossOrigin(value: string | null) { throw ""; }

    get rel(): string { throw ""; }
    set rel(value: string) { throw ""; }

    get as(): string { throw ""; }
    set as(value: string) { throw ""; }

    get relList() { throw ""; }
    set relList(value) { throw ""; }

    get media(): string { throw ""; }
    set media(value: string) { throw ""; }

    get integrity(): string { throw ""; }
    set integrity(value: string) { throw ""; }

    get hreflang(): string { throw ""; }
    set hreflang(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }

    get sizes() { throw ""; }
    set sizes(value) { throw ""; }

    get imageSrcset(): string { throw ""; }
    set imageSrcset(value: string) { throw ""; }

    get imageSizes(): string { throw ""; }
    set imageSizes(value: string) { throw ""; }

    get referrerPolicy(): string { throw ""; }
    set referrerPolicy(value: string) { throw ""; }
}

// TODO: apply mixins

export default HTMLLinkElement;
