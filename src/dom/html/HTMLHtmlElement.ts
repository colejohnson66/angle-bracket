import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
 *
 * [Exposed=Window]
 * interface HTMLHtmlElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLHtmlElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLHtmlElement;
