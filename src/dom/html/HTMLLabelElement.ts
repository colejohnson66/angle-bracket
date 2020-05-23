import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";

/* https://html.spec.whatwg.org/multipage/forms.html#the-label-element
 *
 * [Exposed=Window]
 * interface HTMLLabelElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * 
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute DOMString htmlFor;
 *   readonly attribute HTMLElement? control;
 * };
 */
class HTMLLabelElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get form(): HTMLFormElement | null { throw ""; }

    get htmlFor(): string { throw ""; }
    set htmlFor(value: string) { throw ""; }

    get control(): HTMLElement | null { throw ""; }
}

export default HTMLLabelElement;
