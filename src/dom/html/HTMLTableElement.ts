import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";
import HTMLTableCaptionElement from "./HTMLTableCaptionElement";
import HTMLTableRowElement from "./HTMLTableRowElement";
import HTMLTableSectionElement from "./HTMLTableSectionElement";

/* https://html.spec.whatwg.org/multipage/tables.html#the-table-element
 *
 * [Exposed=Window]
 * interface HTMLTableElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute HTMLTableCaptionElement? caption;
 *   HTMLTableCaptionElement createCaption();
 *   [CEReactions] void deleteCaption();
 *
 *   [CEReactions] attribute HTMLTableSectionElement? tHead;
 *   HTMLTableSectionElement createTHead();
 *   [CEReactions] void deleteTHead();
 *
 *   [CEReactions] attribute HTMLTableSectionElement? tFoot;
 *   HTMLTableSectionElement createTFoot();
 *   [CEReactions] void deleteTFoot();
 *
 *   [SameObject] readonly attribute HTMLCollection tBodies;
 *   HTMLTableSectionElement createTBody();
 *
 *   [SameObject] readonly attribute HTMLCollection rows;
 *   HTMLTableRowElement insertRow(optional long index = -1);
 *   [CEReactions] void deleteRow(long index);
 * };
 */
class HTMLTableElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get caption(): HTMLTableCaptionElement | null { throw ""; }
    set caption(value: HTMLTableCaptionElement | null) { throw ""; }

    createCaption(): HTMLTableCaptionElement { throw ""; }

    deleteCaption(): void { throw ""; }


    get tHead(): HTMLTableSectionElement | null { throw ""; }
    set tHead(value: HTMLTableSectionElement | null) { throw ""; }

    createTHead(): HTMLTableSectionElement { throw ""; }

    deleteTHead(): void { throw ""; }


    get tFoot(): HTMLTableSectionElement | null { throw ""; }
    set tFoot(value: HTMLTableSectionElement | null) { throw ""; }

    createTFoot(): HTMLTableSectionElement { throw ""; }

    deleteTFoot(): void { throw ""; }


    get tBodies(): HTMLCollection { throw ""; }

    createTBody(): HTMLTableSectionElement { throw ""; }


    get rows(): HTMLCollection { throw ""; }

    insertRow(index: number = -1): HTMLTableRowElement { throw ""; }

    deleteRow(index: number): void { throw ""; }
}

export default HTMLTableElement;
