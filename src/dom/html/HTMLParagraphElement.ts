import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
 *
 * [Exposed=Window]
 * interface HTMLParagraphElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLParagraphElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLParagraphElement;
