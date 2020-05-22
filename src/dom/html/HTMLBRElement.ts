import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element
 *
 * [Exposed=Window]
 * interface HTMLBRElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLBRElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLBRElement;
