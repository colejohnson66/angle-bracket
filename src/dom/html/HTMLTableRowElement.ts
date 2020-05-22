import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";
import HTMLTableCellElement from "./HTMLTableCellElement";

/* https://html.spec.whatwg.org/multipage/tables.html#the-tr-element
 *
 * [Exposed=Window]
 * interface HTMLTableRowElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   readonly attribute long rowIndex;
 *   readonly attribute long sectionRowIndex;
 *   [SameObject] readonly attribute HTMLCollection cells;
 *   HTMLTableCellElement insertCell(optional long index = -1);
 *   [CEReactions] void deleteCell(long index);
 * };
 */
class HTMLTableRowElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get rowIndex(): number { throw ""; }

    get sectionRowIndex(): number { throw ""; }

    get cells(): HTMLCollection { throw ""; }

    insertCell(index: number = -1): HTMLTableCellElement { throw ""; }

    deleteCell(index: number): void { throw ""; }
}

export default HTMLTableRowElement;
