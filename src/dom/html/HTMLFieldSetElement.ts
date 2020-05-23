import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";
import ValidityState from "./ValidityState";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
 *
 * [Exposed=Window]
 * interface HTMLFieldSetElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute boolean disabled;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute DOMString name;
 *
 *   readonly attribute DOMString type;
 *
 *   [SameObject] readonly attribute HTMLCollection elements;
 *
 *   readonly attribute boolean willValidate;
 *   [SameObject] readonly attribute ValidityState validity;
 *   readonly attribute DOMString validationMessage;
 *   boolean checkValidity();
 *   boolean reportValidity();
 *   void setCustomValidity(DOMString error);
 * };
 */
class HTMLFieldSetElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }


    get type(): string { throw ""; }


    get elements(): HTMLCollection { throw ""; }


    get willValidate(): boolean { throw ""; }

    get validity(): ValidityState { throw ""; }

    get validationMessage(): string { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }

    setCustomValidity(error: string): void { throw ""; }
}

export default HTMLFieldSetElement;
