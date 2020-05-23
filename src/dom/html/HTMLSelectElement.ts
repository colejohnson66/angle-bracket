import { Element, HTMLCollection, NodeList } from "../base/index";

import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";
import HTMLOptGroupElement from "./HTMLOptGroupElement";
import HTMLOptionElement from "./HTMLOptionElement";
import ValidityState from "./ValidityState";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
 *
 * [Exposed=Window]
 * interface HTMLSelectElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString autocomplete;
 *   [CEReactions] attribute boolean disabled;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute boolean multiple;
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute boolean required;
 *   [CEReactions] attribute unsigned long size;
 *
 *   readonly attribute DOMString type;
 *
 *   [SameObject] readonly attribute HTMLOptionsCollection options;
 *   [CEReactions] attribute unsigned long length;
 *   getter Element? item(unsigned long index);
 *   HTMLOptionElement? namedItem(DOMString name);
 *   [CEReactions] void add((HTMLOptionElement or HTMLOptGroupElement) element, optional (HTMLElement or long)? before = null);
 *   [CEReactions] void remove(); // ChildNode overload
 *   [CEReactions] void remove(long index);
 *   [CEReactions] setter void (unsigned long index, HTMLOptionElement? option);
 *
 *   [SameObject] readonly attribute HTMLCollection selectedOptions;
 *   attribute long selectedIndex;
 *   attribute DOMString value;
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
// TODO: `options` is of type `HTMLOptionsCollection`
class HTMLSelectElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get autocomplete(): string { throw ""; }
    set autocomplete(value: string) { throw ""; }

    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get multiple(): boolean { throw ""; }
    set multiple(value: boolean) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get required(): boolean { throw ""; }
    set required(value: boolean) { throw ""; }

    get size(): number { throw ""; }
    set size(value: number) { throw ""; }


    get type(): string { throw ""; }


    get options() { throw ""; }

    get length(): number { throw ""; }
    set length(value: number) { throw ""; }

    item(index: number): Element | null { throw ""; }

    namedItem(name: string): HTMLOptionElement | null { throw ""; }

    add(element: HTMLOptionElement | HTMLOptGroupElement, before: HTMLElement | number | null = null): void { throw ""; }

    remove(index: number | undefined = undefined): void { throw ""; }

    setter(index: number, option: HTMLOptionElement | null): void { throw ""; }


    get selectedOptions(): HTMLCollection { throw ""; }

    get selectedIndex(): number { throw ""; }
    set selectedIndex(value: number) { throw ""; }

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

export default HTMLSelectElement;
