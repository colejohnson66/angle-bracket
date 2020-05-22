import { Element } from "../base/index";

/* https://html.spec.whatwg.org/multipage/dom.html#htmlelement
 *
 * [Exposed=Window]
 * interface HTMLElement : Element {
 *   [HTMLConstructor] constructor();
 *
 *   // metadata attributes
 *   [CEReactions] attribute DOMString title;
 *   [CEReactions] attribute DOMString lang;
 *   [CEReactions] attribute boolean translate;
 *   [CEReactions] attribute DOMString dir;
 *
 *   // user interaction
 *   [CEReactions] attribute boolean hidden;
 *   void click();
 *   [CEReactions] attribute DOMString accessKey;
 *   readonly attribute DOMString accessKeyLabel;
 *   [CEReactions] attribute boolean draggable;
 *   [CEReactions] attribute boolean spellcheck;
 *   [CEReactions] attribute DOMString autocapitalize;
 *
 *   [CEReactions] attribute [LegacyNullToEmptyString] DOMString innerText;
 *
 *   ElementInternals attachInternals();
 * };
 *
 * HTMLElement includes GlobalEventHandlers;
 * HTMLElement includes DocumentAndElementEventHandlers;
 * HTMLElement includes ElementContentEditable;
 * HTMLElement includes HTMLOrSVGElement;
 *
 * [Exposed=Window]
 * interface HTMLUnknownElement : HTMLElement {
 *   // Note: intentionally no [HTMLConstructor]
 * };
 */
// TODO: attachInternals returns type of `ElementInternals`
class HTMLElement extends Element {
    constructor() {
        super();
        throw "";
    }


    get title(): string { throw ""; }
    set title(value: string) { throw ""; }

    get lang(): string { throw ""; }
    set lang(value: string) { throw ""; }

    get translate(): boolean { throw ""; }
    set translate(value: boolean) { throw ""; }

    get dir(): string { throw ""; }
    set dir(value: string) { throw ""; }


    get hidden(): boolean { throw ""; }
    set hidden(value: boolean) { throw ""; }

    click(): void { throw ""; }

    get accessKey(): string { throw ""; }
    set accessKey(value: string) { throw ""; }

    get accessKeyLabel(): string { throw ""; }

    get draggable(): boolean { throw ""; }
    set draggable(value: boolean) { throw ""; }

    get spellcheck(): boolean { throw ""; }
    set spellcheck(value: boolean) { throw ""; }

    get autocapitalize(): string { throw ""; }
    set autocapitalize(value: string) { throw ""; }


    get innerText(): string { throw ""; }
    set innerText(value: string) { throw ""; }


    attachInternals() { throw ""; }
}

// TODO: add mixins

class HTMLUnknownElement extends HTMLElement { }

export default HTMLElement;
export { HTMLUnknownElement };
