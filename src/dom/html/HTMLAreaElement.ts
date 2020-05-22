import { DOMTokenList } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
 *
 * [Exposed=Window]
 * interface HTMLAreaElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString alt;
 *   [CEReactions] attribute DOMString coords;
 *   [CEReactions] attribute DOMString shape;
 *   [CEReactions] attribute DOMString target;
 *   [CEReactions] attribute DOMString download;
 *   [CEReactions] attribute USVString ping;
 *   [CEReactions] attribute DOMString rel;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;
 *   [CEReactions] attribute DOMString referrerPolicy;
 * };
 * HTMLAreaElement includes HTMLHyperlinkElementUtils;
 */
class HTMLAreaElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get alt(): string { throw ""; }
    set alt(value: string) { throw ""; }

    get coords(): string { throw ""; }
    set coords(value: string) { throw ""; }

    get shape(): string { throw ""; }
    set shape(value: string) { throw ""; }

    get target(): string { throw ""; }
    set target(value: string) { throw ""; }

    get download(): string { throw ""; }
    set download(value: string) { throw ""; }

    get ping(): string { throw ""; }
    set ping(value: string) { throw ""; }

    get rel(): string { throw ""; }
    set rel(value: string) { throw ""; }

    get relList(): DOMTokenList { throw ""; }

    get referrerPolicy(): string { throw ""; }
    set referrerPolicy(value: string) { throw ""; }
}

// TODO: apply mixins

export default HTMLAreaElement;
