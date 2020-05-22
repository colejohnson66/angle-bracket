import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element
 *
 * [Exposed=Window]
 * interface HTMLSpanElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLSpanElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLSpanElement;
