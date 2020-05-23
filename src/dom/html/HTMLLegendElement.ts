import HTMLElement from "./HTMLElement";
import HTMLFormElement from "./HTMLFormElement";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element
 *
 * [Exposed=Window]
 * interface HTMLLegendElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   readonly attribute HTMLFormElement? form;
 * };
 */
class HTMLLegendElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get form(): HTMLFormElement | null { throw ""; }
}

export default HTMLLegendElement;
