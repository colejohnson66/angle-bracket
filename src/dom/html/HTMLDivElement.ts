import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element
 *
 * [Exposed=Window]
 * interface HTMLDivElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLDivElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLDivElement;
