import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-param-element
 *
 * [Exposed=Window]
 * interface HTMLVideoElement : HTMLMediaElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute unsigned long width;
 *   [CEReactions] attribute unsigned long height;
 *   readonly attribute unsigned long videoWidth;
 *   readonly attribute unsigned long videoHeight;
 *   [CEReactions] attribute USVString poster;
 *   [CEReactions] attribute boolean playsInline;
 * };
 */
class HTMLVideoElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get width(): number { throw ""; }
    set width(value: number) { throw ""; }

    get height(): number { throw ""; }
    set height(value: number) { throw ""; }

    get videoWidth(): number { throw ""; }

    get videoHeight(): number { throw ""; }

    get poster(): string { throw ""; }
    set poster(value: string) { throw ""; }

    get playsInline(): boolean { throw ""; }
    set playsInline(value: boolean) { throw ""; }
}

export default HTMLVideoElement;
