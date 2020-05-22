import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element
 *
 * [Exposed=Window]
 * interface HTMLTimeElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute DOMString dateTime;
 * };
 */
class HTMLTimeElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }

    get dateTime(): string { throw ""; }
    set dateTime(value: string) { throw ""; }
}

export default HTMLTimeElement;
