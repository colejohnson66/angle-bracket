import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/sections.html#the-body-element
 *
 * [Exposed=Window]
 * interface HTMLBodyElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 *
 * HTMLBodyElement includes WindowEventHandlers;
 */
class HTMLBodyElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

// TODO: apply mixins

export default HTMLBodyElement;
