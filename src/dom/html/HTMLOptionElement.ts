import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element
 *
 * [Exposed=Window,
 *  LegacyFactoryFunction=Option(optional DOMString text = "", optional DOMString value, optional boolean defaultSelected = false, optional boolean selected = false)]
 * interface HTMLOptionElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute boolean disabled;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute DOMString label;
 *   [CEReactions] attribute boolean defaultSelected;
 *   attribute boolean selected;
 *   [CEReactions] attribute DOMString value;
 *
 *   [CEReactions] attribute DOMString text;
 *   readonly attribute long index;
 * };
 */
class HTMLOptionElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get label(): string { throw ""; }
    set label(value: string) { throw ""; }

    get defaultSelected(): boolean { throw ""; }
    set defaultSelected(value: boolean) { throw ""; }

    get selected(): boolean { throw ""; }
    set selected(value: boolean) { throw ""; }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }


    get text(): string { throw ""; }
    set text(value: string) { throw ""; }

    get index(): number { throw ""; }
}

export default HTMLOptionElement;
