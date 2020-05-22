import { HTMLCollection } from "../base/index";
import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/tables.html#the-tr-element
 *
 * [Exposed=Window]
 * interface HTMLTableCellElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute unsigned long colSpan;
 *   [CEReactions] attribute unsigned long rowSpan;
 *   [CEReactions] attribute DOMString headers;
 *   readonly attribute long cellIndex;
 *
 *   [CEReactions] attribute DOMString scope; // only conforming for th elements
 *   [CEReactions] attribute DOMString abbr;  // only conforming for th elements
 * };
 * 
 */
class HTMLTableCellElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get colSpan(): number { throw ""; }
    set colSpan(value: number) { throw ""; }

    get rowSpan(): number { throw ""; }
    set rowSpan(value: number) { throw ""; }

    get headers(): string { throw ""; }
    set headers(value: string) { throw ""; }

    get cellIndex(): number { throw ""; }


    get scope(): string { throw ""; }
    set scope(value: string) { throw ""; }

    get abbr(): string { throw ""; }
    set abbr(value: string) { throw ""; }
}

export default HTMLTableCellElement;
