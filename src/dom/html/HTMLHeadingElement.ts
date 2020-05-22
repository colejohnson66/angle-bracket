import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 *
 * [Exposed=Window]
 * interface HTMLHeadingElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLHeadingElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLHeadingElement;
