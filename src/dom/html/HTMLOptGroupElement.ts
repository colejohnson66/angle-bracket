import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element
 *
 * [Exposed=Window]
 * interface HTMLOptGroupElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute boolean disabled;
 *   [CEReactions] attribute DOMString label;
 * };
 */
class HTMLOptGroupElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get disabled(): boolean { throw ""; }
    set disabled(value: boolean) { throw ""; }

    get label(): string { throw ""; }
    set label(value: string) { throw ""; }
}

export default HTMLOptGroupElement;
