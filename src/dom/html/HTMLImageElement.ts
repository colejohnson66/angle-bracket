import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
 *
 * [Exposed=Window,
 *  LegacyFactoryFunction=Image(optional unsigned long width, optional unsigned long height)]
 * interface HTMLImageElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString alt;
 *   [CEReactions] attribute USVString src;
 *   [CEReactions] attribute USVString srcset;
 *   [CEReactions] attribute DOMString sizes;
 *   [CEReactions] attribute DOMString? crossOrigin;
 *   [CEReactions] attribute DOMString useMap;
 *   [CEReactions] attribute boolean isMap;
 *   [CEReactions] attribute unsigned long width;
 *   [CEReactions] attribute unsigned long height;
 *   readonly attribute unsigned long naturalWidth;
 *   readonly attribute unsigned long naturalHeight;
 *   readonly attribute boolean complete;
 *   readonly attribute USVString currentSrc;
 *   [CEReactions] attribute DOMString referrerPolicy;
 *   [CEReactions] attribute DOMString decoding;
 *   [CEReactions] attribute DOMString loading;
 *
 *   Promise<void> decode();
 * };
 */
class HTMLImageElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get alt(): string { throw ""; }
    set alt(value: string) { throw ""; }

    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get srcset(): string { throw ""; }
    set srcset(value: string) { throw ""; }

    get sizes(): string { throw ""; }
    set sizes(value: string) { throw ""; }

    get crossOrigin(): string | null { throw ""; }
    set crossOrigin(value: string | null) { throw ""; }

    get useMap(): string { throw ""; }
    set useMap(value: string) { throw ""; }

    get isMap(): boolean { throw ""; }
    set isMap(value: boolean) { throw ""; }

    get width(): number { throw ""; }
    set width(value: number) { throw ""; }

    get height(): number { throw ""; }
    set height(value: number) { throw ""; }

    get naturalWidth(): number { throw ""; }

    get naturalHeight(): number { throw ""; }

    get complete(): boolean { throw ""; }

    get currentSrc(): string { throw ""; }

    get referrerPolicy(): string { throw ""; }
    set referrerPolicy(value: string) { throw ""; }

    get decoding(): string { throw ""; }
    set decoding(value: string) { throw ""; }

    get loading(): string { throw ""; }
    set loading(value: string) { throw ""; }


    decode(): Promise<void> { throw ""; }
}

export default HTMLImageElement;
