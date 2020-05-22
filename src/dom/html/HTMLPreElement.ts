import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
 *
 * [Exposed=Window]
 * interface HTMLPreElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLPreElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLPreElement;
