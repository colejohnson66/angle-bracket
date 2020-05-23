import { HTMLCollection, NodeList } from "../base/index";

import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";
import SelectionMode from "./SelectionMode";
import ValidityState from "./ValidityState";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
 *
 * [Exposed=Window]
 * interface HTMLTextAreaElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString autocomplete;
 *   [CEReactions] attribute unsigned long cols;
 *   [CEReactions] attribute DOMString dirName;
 *   [CEReactions] attribute boolean disabled;
 *   readonly attribute HTMLFormElement? form;
 *   [CEReactions] attribute long maxLength;
 *   [CEReactions] attribute long minLength;
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute DOMString placeholder;
 *   [CEReactions] attribute boolean readOnly;
 *   [CEReactions] attribute boolean required;
 *   [CEReactions] attribute unsigned long rows;
 *   [CEReactions] attribute DOMString wrap;
 *
 *   readonly attribute DOMString type;
 *   [CEReactions] attribute DOMString defaultValue;
 *   attribute [LegacyNullToEmptyString] DOMString value;
 *   readonly attribute unsigned long textLength;
 *
 *   readonly attribute boolean willValidate;
 *   readonly attribute ValidityState validity;
 *   readonly attribute DOMString validationMessage;
 *   boolean checkValidity();
 *   boolean reportValidity();
 *   void setCustomValidity(DOMString error);
 *
 *   readonly attribute NodeList labels;
 *
 *   void select();
 *   attribute unsigned long selectionStart;
 *   attribute unsigned long selectionEnd;
 *   attribute DOMString selectionDirection;
 *   void setRangeText(DOMString replacement);
 *   void setRangeText(DOMString replacement, unsigned long start, unsigned long end, optional SelectionMode selectionMode = "preserve");
 *   void setSelectionRange(unsigned long start, unsigned long end, optional DOMString direction);
 * };
 */
// TODO: `validity` is of type `ValidityState`
// TODO: `setRangeText`'s `selectionMode` is of type `SelectionMode|undefined` with default of "preserve"
class HTMLTextAreaElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get autocomplete(): string { throw ""; }
    set autocomplete(value: string) { throw ""; }

    get cols(): number { throw ""; }
    set cols(value: number) { throw ""; }

    get dirName(): string { throw ""; }
    set dirName(value: string) { throw ""; }

    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get maxLength(): number { throw ""; }
    set maxLength(value: number) { throw ""; }

    get minLength(): number { throw ""; }
    set minLength(value: number) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get placeholder(): string { throw ""; }
    set placeholder(value: string) { throw ""; }

    get readOnly(): boolean { throw ""; }
    set readOnly(value: boolean) { throw ""; }

    get required(): boolean { throw ""; }
    set required(value: boolean) { throw ""; }

    get rows(): number { throw ""; }
    set rows(value: number) { throw ""; }

    get wrap(): string { throw ""; }
    set wrap(value: string) { throw ""; }


    get type(): string { throw ""; }

    get defaultValue(): string { throw ""; }
    set defaultValue(value: string) { throw ""; }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }

    get textLength(): number { throw ""; }


    get willValidate(): boolean { throw ""; }

    get validity(): ValidityState { throw ""; }

    get validationMessage(): string { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }

    setCustomValidity(error: string) { throw ""; }


    get labels(): NodeList { throw ""; }


    select(): void { throw ""; }

    get selectionStart(): number { throw ""; }
    set selectionStart(value: number) { throw ""; }

    get selectionEnd(): number { throw ""; }
    set selectionEnd(value: number) { throw ""; }

    get selectionDirection(): string { throw ""; }
    set selectionDirection(value: string) { throw ""; }

    setRangeText(replacement: string, start: number | undefined = undefined, end: number | undefined = undefined, selectionMode: SelectionMode = "preserve") { throw ""; }

    setSelectionRange(start: number, end: number, direction: string | undefined = undefined) { throw ""; }
}

export default HTMLTextAreaElement;
