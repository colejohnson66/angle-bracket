import { Document } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element
 *
 * [Exposed=Window]
 * interface HTMLObjectElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString data;
 *   [CEReactions] attribute DOMString type;
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute DOMString useMap;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute DOMString width;
 *   [CEReactions] attribute DOMString height;
 *   readonly attribute Document? contentDocument;
 *   readonly attribute WindowProxy? contentWindow;
 *   Document? getSVGDocument();
 *
 *   readonly attribute boolean willValidate;
 *   readonly attribute ValidityState validity;
 *   readonly attribute DOMString validationMessage;
 *   boolean checkValidity();
 *   boolean reportValidity();
 *   void setCustomValidity(DOMString error);
 * };
 */
// TODO: `form` has type `HTMLFormElement | null`
// TODO: `contentWindow` has type `WindowProxy | null`
// TODO: `validity` has type `ValidityState`
class HTMLObjectElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get data(): string { throw ""; }
    set data(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get useMap(): string { throw ""; }
    set useMap(value: string) { throw ""; }

    get form() { throw ""; }

    get width(): string { throw ""; }
    set width(value: string) { throw ""; }

    get height(): string { throw ""; }
    set height(value: string) { throw ""; }

    get contentDocument(): Document | null { throw ""; }
    set contentDocument(value: Document | null) { throw ""; }

    get contentWindow() { throw ""; }
    set contentWindow(value) { throw ""; }

    getSVGDocument(): Document | null { throw ""; }


    get willValidate(): boolean { throw ""; }

    get validity() { throw ""; }

    get validationMessage(): string { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }

    setCustomValidity(error: string): void { throw ""; }
}

export default HTMLObjectElement;
