import DOMStringMap from "../DOMStringMap";

/* https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement
 *
 * interface mixin HTMLOrSVGElement {
 *   [SameObject] readonly attribute DOMStringMap dataset;
 *   attribute DOMString nonce; // intentionally no [CEReactions]
 *
 *   [CEReactions] attribute boolean autofocus;
 *   [CEReactions] attribute long tabIndex;
 *   void focus(optional FocusOptions options = {});
 *   void blur();
 * };
 */
// TODO focus[options] is `FocusOptions`
class HTMLOrSVGElement {
    get dataset(): DOMStringMap { throw ""; }

    get nonce(): string { throw ""; }
    set nonce(value: string) { throw ""; }


    get autofocus(): boolean { throw ""; }
    set autofocus(value: boolean) { throw ""; }

    get tabIndex(): number { throw ""; }
    set tabIndex(value: number) { throw ""; }

    focus(options): void { throw ""; }

    blur(): void { throw ""; }
}

export default HTMLOrSVGElement;
