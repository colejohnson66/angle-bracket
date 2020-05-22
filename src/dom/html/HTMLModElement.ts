import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/edits.html#attributes-common-to-ins-and-del-elements
 *
 * [Exposed=Window]
 * interface HTMLModElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString cite;
 *   [CEReactions] attribute DOMString dateTime;
 * };
 */
class HTMLModElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get cite(): string { throw ""; }
    set cite(value: string) { throw ""; }

    get dateTime(): string { throw ""; }
    set dateTime(value: string) { throw ""; }
}

export default HTMLModElement;
