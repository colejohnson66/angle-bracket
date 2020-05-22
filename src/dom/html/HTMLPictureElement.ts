import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element
 *
 * [Exposed=Window]
 * interface HTMLPictureElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLPictureElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLPictureElement;
