import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
 *
 * [Exposed=Window]
 * interface HTMLHeadElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLHeadElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLHeadElement;
