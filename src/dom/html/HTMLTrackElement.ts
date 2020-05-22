import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/media.html#the-track-element
 *
 * [Exposed=Window]
 * interface HTMLTrackElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString kind;
 *   [CEReactions] attribute USVString src;
 *   [CEReactions] attribute DOMString srclang;
 *   [CEReactions] attribute DOMString label;
 *   [CEReactions] attribute boolean default;
 *
 *   const unsigned short NONE = 0;
 *   const unsigned short LOADING = 1;
 *   const unsigned short LOADED = 2;
 *   const unsigned short ERROR = 3;
 *   readonly attribute unsigned short readyState;
 *
 *   readonly attribute TextTrack track;
 * };
 */
// TODO: `track` has type `TextTrack`
class HTMLTrackElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get kind(): string { throw ""; }
    set kind(value: string) { throw ""; }

    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get srclang(): string { throw ""; }
    set srclang(value: string) { throw ""; }

    get label(): string { throw ""; }
    set label(value: string) { throw ""; }

    get default(): boolean { throw ""; }
    set default(value: boolean) { throw ""; }


    static readonly NONE = 0;
    static readonly LOADING = 1;
    static readonly LOADED = 2;
    static readonly ERROR = 3;

    get readyState(): number { throw ""; }
    set readyState(value: number) { throw ""; }


    get track() { throw ""; }
}

export default HTMLTrackElement;
