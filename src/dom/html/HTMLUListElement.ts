import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
 *
 * [Exposed=Window]
 * interface HTMLUListElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLUListElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLUListElement;
