import { Document } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element
 *
 * [Exposed=Window]
 * interface HTMLEmbedElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString src;
 *   [CEReactions] attribute DOMString type;
 *   [CEReactions] attribute DOMString width;
 *   [CEReactions] attribute DOMString height;
 *   Document? getSVGDocument();
 * };
 */
class HTMLEmbedElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }

    get width(): string { throw ""; }
    set width(value: string) { throw ""; }

    get height(): string { throw ""; }
    set height(value: string) { throw ""; }

    getSVGDocument(): Document | null { throw ""; }
}

export default HTMLEmbedElement;
