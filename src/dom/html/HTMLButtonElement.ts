import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";
import { NodeList } from "../base/index";
import ValidityState from "./ValidityState";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
 *
 * [Exposed=Window]
 * interface HTMLButtonElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute boolean disabled;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute USVString formAction;
 *   [CEReactions] attribute DOMString formEnctype;
 *   [CEReactions] attribute DOMString formMethod;
 *   [CEReactions] attribute boolean formNoValidate;
 *   [CEReactions] attribute DOMString formTarget;
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute DOMString type;
 *   [CEReactions] attribute DOMString value;
 *
 *   readonly attribute boolean willValidate;
 *   readonly attribute ValidityState validity;
 *   readonly attribute DOMString validationMessage;
 *   boolean checkValidity();
 *   boolean reportValidity();
 *   void setCustomValidity(DOMString error);
 *
 *   readonly attribute NodeList labels;
 * };
 */
class HTMLButtonElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get formAction(): string { throw ""; }
    set formAction(value: string) { throw ""; }

    get formEnctype(): string { throw ""; }
    set formEnctype(value: string) { throw ""; }

    get formMethod(): string { throw ""; }
    set formMethod(value: string) { throw ""; }

    get formNoValidate(): boolean { throw ""; }
    set formNoValidate(value: boolean) { throw ""; }

    get formTarget(): string { throw ""; }
    set formTarget(value: string) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }


    get willValidate(): boolean { throw ""; }

    get validity(): ValidityState { throw ""; }

    get validationMessage(): string { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }

    setCustomValidity(error: string): void { throw ""; }


    get labels(): NodeList { throw ""; }
}

export default HTMLButtonElement;
