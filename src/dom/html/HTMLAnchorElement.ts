import { DOMTokenList } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
 *
 * [Exposed=Window]
 * interface HTMLAnchorElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString target;
 *   [CEReactions] attribute DOMString download;
 *   [CEReactions] attribute USVString ping;
 *   [CEReactions] attribute DOMString rel;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;
 *   [CEReactions] attribute DOMString hreflang;
 *   [CEReactions] attribute DOMString type;
 *
 *   [CEReactions] attribute DOMString text;
 *
 *   [CEReactions] attribute DOMString referrerPolicy;
 * };
 * HTMLAnchorElement includes HTMLHyperlinkElementUtils;
 */
class HTMLAnchorElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get target(): string { throw ""; }
    set target(value: string) { throw ""; }

    get download(): string { throw ""; }
    set download(value: string) { throw ""; }

    get ping(): string { throw ""; }
    set ping(value: string) { throw ""; }

    get rel(): string { throw ""; }
    set rel(value: string) { throw ""; }

    get relList(): DOMTokenList { throw ""; }

    get hreflang(): string { throw ""; }
    set hreflang(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }


    get text(): string { throw ""; }
    set text(value: string) { throw ""; }


    get referrerPolicy(): string { throw ""; }
    set referrerPolicy(value: string) { throw ""; }
}

// TODO: apply mixins

export default HTMLAnchorElement;
