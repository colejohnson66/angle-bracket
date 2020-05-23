import { DOMTokenList, Element } from "../base/index";

import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/forms.html#the-form-element
 *
 * [Exposed=Window,
 *  LegacyOverrideBuiltIns,
 *  LegacyUnenumerableNamedProperties]
 * interface HTMLFormElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString acceptCharset;
 *   [CEReactions] attribute USVString action;
 *   [CEReactions] attribute DOMString autocomplete;
 *   [CEReactions] attribute DOMString enctype;
 *   [CEReactions] attribute DOMString encoding;
 *   [CEReactions] attribute DOMString method;
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute boolean noValidate;
 *   [CEReactions] attribute DOMString target;
 *   [CEReactions] attribute DOMString rel;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;
 *
 *   [SameObject] readonly attribute HTMLFormControlsCollection elements;
 *   readonly attribute unsigned long length;
 *   getter Element (unsigned long index);
 *   getter (RadioNodeList or Element) (DOMString name);
 *
 *   void submit();
 *   void requestSubmit(optional HTMLElement? submitter = null);
 *   [CEReactions] void reset();
 *   boolean checkValidity();
 *   boolean reportValidity();
 * };
 */
// TODO: `elements` is of type `HTMLFormControlsCollection`
// TODO: `getter` by string returns `RadioNodeList | Element`
class HTMLFormElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get acceptCharset(): string { throw ""; }
    set acceptCharset(value: string) { throw ""; }

    get action(): string { throw ""; }
    set action(value: string) { throw ""; }

    get autocomplete(): string { throw ""; }
    set autocomplete(value: string) { throw ""; }

    get enctype(): string { throw ""; }
    set enctype(value: string) { throw ""; }

    get encoding(): string { throw ""; }
    set encoding(value: string) { throw ""; }

    get method(): string { throw ""; }
    set method(value: string) { throw ""; }

    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get noValidate(): boolean { throw ""; }
    set noValidate(value: boolean) { throw ""; }

    get target(): string { throw ""; }
    set target(value: string) { throw ""; }

    get rel(): string { throw ""; }
    set rel(value: string) { throw ""; }

    get relList(): DOMTokenList { throw ""; }


    get elements() { throw ""; }

    get length(): number { throw ""; }

    getter(index: number): Element;
    getter(name: string);
    getter(search): any { throw ""; }


    submit(): void { throw ""; }

    requestSubmit(submitter: HTMLElement | null = null) { throw ""; }

    reset(): void { throw ""; }

    checkValidity(): boolean { throw ""; }

    reportValidity(): boolean { throw ""; }
}

export default HTMLFormElement;
