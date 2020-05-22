import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";
import HTMLTableRowElement from "./HTMLTableRowElement";

/* https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element
 *
 * [Exposed=Window]
 * interface HTMLTableSectionElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [SameObject] readonly attribute HTMLCollection rows;
 *   HTMLTableRowElement insertRow(optional long index = -1);
 *   [CEReactions] void deleteRow(long index);
 * };
 */
class HTMLTableSectionElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get rows(): HTMLCollection { throw ""; }

    insertRow(index: number = -1): HTMLTableRowElement { throw ""; }

    deleteRow(index: number): void { throw ""; }
}

export default HTMLTableSectionElement;
