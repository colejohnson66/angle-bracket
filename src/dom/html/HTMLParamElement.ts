import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-param-element
 *
 * [Exposed=Window]
 * interface HTMLParamElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString name;
 *   [CEReactions] attribute DOMString value;
 * };
 */
class HTMLParamElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get value(): string { throw ""; }
    set value(value: string) { throw ""; }
}

export default HTMLParamElement;
