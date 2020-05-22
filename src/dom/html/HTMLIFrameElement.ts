import { DOMTokenList, Document } from "../base/index";

import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
 *
 * [Exposed=Window]
 * interface HTMLIFrameElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString src;
 *   [CEReactions] attribute DOMString srcdoc;
 *   [CEReactions] attribute DOMString name;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList sandbox;
 *   [CEReactions] attribute DOMString allow;
 *   [CEReactions] attribute boolean allowFullscreen;
 *   [CEReactions] attribute boolean allowPaymentRequest;
 *   [CEReactions] attribute DOMString width;
 *   [CEReactions] attribute DOMString height;
 *   [CEReactions] attribute DOMString referrerPolicy;
 *   readonly attribute Document? contentDocument;
 *   readonly attribute WindowProxy? contentWindow;
 *   Document? getSVGDocument();
 * };
 */
// TODO: contentWindow is of type `WindowProxy`, an alias for `Window`
class HTMLIFrameElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get srcdoc(): string { throw ""; }
    set srcdoc(value: string) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get sandbox(): DOMTokenList { throw ""; }

    get allow(): string { throw ""; }
    set allow(value: string) { throw ""; }

    get allowFullscreen(): boolean { throw ""; }
    set allowFullscreen(value: boolean) { throw ""; }

    get allowPaymentRequest(): boolean { throw ""; }
    set allowPaymentRequest(value: boolean) { throw ""; }

    get width(): string { throw ""; }
    set width(value: string) { throw ""; }

    get height(): string { throw ""; }
    set height(value: string) { throw ""; }

    get referrerPolicy(): string { throw ""; }
    set referrerPolicy(value: string) { throw ""; }

    get contentDocument(): Document | null { throw ""; }

    get contentWindow() { throw ""; }

    getSVGDocument(): Document | null { throw ""; }
}

export default HTMLIFrameElement;
