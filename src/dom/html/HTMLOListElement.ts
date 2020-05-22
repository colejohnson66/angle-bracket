import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
 *
 * [Exposed=Window]
 * interface HTMLOListElement : HTMLElement {
 *   [HTMLConstructor] constructor();
 *
 *   [CEReactions] attribute boolean reversed;
 *   [CEReactions] attribute long start;
 *   [CEReactions] attribute DOMString type;
 * };
 */
class HTMLOListElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }


    get reversed(): boolean { throw ""; }
    set reversed(value: boolean) { throw ""; }

    get start(): number { throw ""; }
    set start(value: number) { throw ""; }

    get type(): string { throw ""; }
    set type(value: string) { throw ""; }
}

export default HTMLOListElement;
