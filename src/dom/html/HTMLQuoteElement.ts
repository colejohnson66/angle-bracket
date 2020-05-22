import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element
 *
 * [Exposed=Window]
 * interface HTMLQuoteElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute USVString cite;
 * };
 */
class HTMLQuoteElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get cite(): string { throw ""; }
    set cite(value: string) { throw ""; }
}

export default HTMLQuoteElement;
