import { DOMTokenList, NodeList } from "../base/index";

import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";
import ValidityState from "./ValidityState";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element
 *
 * [Exposed=Window]
 * interface HTMLOutputElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList htmlFor;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute DOMString name;
 *
 *   readonly attribute DOMString type;
 *   [CEReactions] attribute DOMString defaultValue;
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
class HTMLOutputElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get htmlFor(): DOMTokenList { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }


    get type(): string { throw ""; }

    get defaultValue(): string { throw ""; }
    set defaultValue(value: string) { throw ""; }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }


    get willValidate(): boolean { throw ""; }

    get validity(): ValidityState { throw ""; }

    get validationMessage(): string { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }

    setCustomValidity(error: string) { throw ""; }


    get labels(): NodeList { throw ""; }
}

export default HTMLOutputElement;
