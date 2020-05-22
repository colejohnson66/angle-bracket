import DocumentFragment from "./DocumentFragment";
import DocumentOrShadowRoot from "./mixin/DocumentOrShadowRoot";
import Element from "./Element";

/* https://dom.spec.whatwg.org/#interface-shadowroot
 *
 * [Exposed=Window]
 * interface ShadowRoot : DocumentFragment {
 *   readonly attribute ShadowRootMode mode;
 *   readonly attribute Element host;
 *   attribute EventHandler onslotchange;
 * };
 *
 * enum ShadowRootMode { "open", "closed" };
 */
// TODO: onslotchange is of type `EventHandler` which is defined in the HTML spec
class ShadowRoot extends DocumentFragment {
    get mode(): ShadowRootMode { throw ""; }

    get host(): Element { throw ""; }

    get onslotchange() { throw ""; }
    set onslotchange(value) { throw ""; }
}

Object.assign(ShadowRoot.prototype, DocumentOrShadowRoot);

type ShadowRootMode = "open" | "closed";

export default ShadowRoot;
export { ShadowRootMode };
