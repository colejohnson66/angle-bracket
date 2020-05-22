import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element
 *
 * [Exposed=Window]
 * interface HTMLMapElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString name;
 *   [SameObject] readonly attribute HTMLCollection areas;
 * };
 */
class HTMLMapElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get name(): string { throw ""; }
    set name(value: string) { throw ""; }

    get areas(): HTMLCollection { throw ""; }
}

export default HTMLMapElement;
