import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element
 *
 * [Exposed=Window]
 * interface HTMLHRElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLHRElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLHRElement;
