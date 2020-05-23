import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";
import { NodeList } from "../base/index";
import SelectionMode from "./SelectionMode";
import ValidityState from "./ValidityState";

/* https://html.spec.whatwg.org/multipage/input.html#the-input-element
 *
 * [Exposed=Window]
 * interface HTMLInputElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString accept;
 *   [CEReactions] attribute DOMString alt;
 *   [CEReactions] attribute DOMString autocomplete;
 *   [CEReactions] attribute boolean defaultChecked;
 *   attribute boolean checked;
 *   [CEReactions] attribute DOMString dirName;
 *   [CEReactions] attribute boolean disabled;
 *   readonly attribute HTMLFormElement? form;
 *   attribute FileList? files;
 *   [CEReactions] attribute USVString formAction;
 *   [CEReactions] attribute DOMString formEnctype;
 *   [CEReactions] attribute DOMString formMethod;
 *   [CEReactions] attribute boolean formNoValidate;
 *   [CEReactions] attribute DOMString formTarget;
 *   [CEReactions] attribute unsigned long height;
 *   attribute boolean indeterminate;
 *   readonly attribute HTMLElement? list;
 *   [CEReactions] attribute DOMString max;
 *   [CEReactions] attribute long maxLength;
 *   [CEReactions] attribute DOMString min;
 *   [CEReactions] attribute long minLength;
 *   [CEReactions] attribute boolean multiple;
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute DOMString pattern;
 *   [CEReactions] attribute DOMString placeholder;
 *   [CEReactions] attribute boolean readOnly;
 *   [CEReactions] attribute boolean required;
 *   [CEReactions] attribute unsigned long size;
 *   [CEReactions] attribute USVString src;
 *   [CEReactions] attribute DOMString step;
 *   [CEReactions] attribute DOMString type;
 *   [CEReactions] attribute DOMString defaultValue;
 *   [CEReactions] attribute [LegacyNullToEmptyString] DOMString value;
 *   attribute object? valueAsDate;
 *   attribute unrestricted double valueAsNumber;
 *   [CEReactions] attribute unsigned long width;
 *
 *   void stepUp(optional long n = 1);
 *   void stepDown(optional long n = 1);
 *
 *   readonly attribute boolean willValidate;
 *   readonly attribute ValidityState validity;
 *   readonly attribute DOMString validationMessage;
 *   boolean checkValidity();
 *   boolean reportValidity();
 *   void setCustomValidity(DOMString error);
 *
 *   readonly attribute NodeList? labels;
 *
 *   void select();
 *   attribute unsigned long? selectionStart;
 *   attribute unsigned long? selectionEnd;
 *   attribute DOMString? selectionDirection;
 *   void setRangeText(DOMString replacement);
 *   void setRangeText(DOMString replacement, unsigned long start, unsigned long end, optional SelectionMode selectionMode = "preserve");
 *   void setSelectionRange(unsigned long start, unsigned long end, optional DOMString direction);
 * };
 */
// TODO: `files` is of type `FileList | null`
class HTMLInputElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get accept(): string { throw ""; }
    set accept(value: string) { throw ""; }

    get alt(): string { throw ""; }
    set alt(value: string) { throw ""; }

    get autocomplete(): string { throw ""; }
    set autocomplete(value: string) { throw ""; }

    get defaultChecked(): boolean { throw ""; }
    set defaultChecked(value: boolean) { throw ""; }

    get checked(): boolean { throw ""; }
    set checked(value: boolean) { throw ""; }

    get dirName(): string { throw ""; }
    set dirName(value: string) { throw ""; }

    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get form(): HTMLFormElement | null { throw ""; }

    get files() { throw ""; }
    set files(value) { throw ""; }

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

    get height(): number { throw ""; }
    set height(value: number) { throw ""; }

    get indeterminate(): boolean { throw ""; }
    set indeterminate(value: boolean) { throw ""; }

    get list(): HTMLElement | null { throw ""; }

    get max(): string { throw ""; }
    set max(value: string) { throw ""; }

    get maxLength(): number { throw ""; }
    set maxLength(value: number) { throw ""; }

    get min(): string { throw ""; }
    set min(value: string) { throw ""; }

    get minLength(): number { throw ""; }
    set minLength(value: number) { throw ""; }

    get multiple(): boolean { throw ""; }
    set multiple(value: boolean) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get pattern(): string { throw ""; }
    set pattern(value: string) { throw ""; }

    get placeholder(): string { throw ""; }
    set placeholder(value: string) { throw ""; }

    get readOnly(): boolean { throw ""; }
    set readOnly(value: boolean) { throw ""; }

    get required(): boolean { throw ""; }
    set required(value: boolean) { throw ""; }

    get size(): number { throw ""; }
    set size(value: number) { throw ""; }

    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get step(): string { throw ""; }
    set step(value: string) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }

    get defaultValue(): string { throw ""; }
    set defaultValue(value: string) { throw ""; }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }

    get valueAsDate(): any { throw ""; }
    set valueAsDate(value: any) { throw ""; }

    get valueAsNumber(): number { throw ""; }
    set valueAsNumber(value: number) { throw ""; }

    get width(): number { throw ""; }
    set width(value: number) { throw ""; }


    stepUp(n: number = 1) { throw ""; }

    stepDown(n: number = 1) { throw ""; }


    get willValidate(): boolean { throw ""; }

    get validity(): ValidityState { throw ""; }

    get validationMessage(): string { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }

    setCustomValidity(error: string): void { throw ""; }


    get labels(): NodeList | null { throw ""; }


    select(): void { throw ""; }

    get selectionStart(): number | null { throw ""; }
    set selectionStart(value: number | null) { throw ""; }

    get selectionEnd(): number | null { throw ""; }
    set selectionEnd(value: number | null) { throw ""; }

    get selectionDirection(): string | null { throw ""; }
    set selectionDirection(value: string | null) { throw ""; }

    setRangeText(replacement: string, start: number = undefined, end: number = undefined, selectionMode: SelectionMode = "select"): void { throw ""; }

    setSelectionRange(start: number, end: number, direction: string = undefined) { throw ""; }
}

export default HTMLInputElement;
