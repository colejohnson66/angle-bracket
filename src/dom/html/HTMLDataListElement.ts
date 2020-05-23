import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element
 *
 * [Exposed=Window]
 * interface HTMLDataListElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [SameObject] readonly attribute HTMLCollection options;
 * };
 */
class HTMLDataListElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get options(): HTMLCollection { throw ""; }
}

export default HTMLDataListElement;
