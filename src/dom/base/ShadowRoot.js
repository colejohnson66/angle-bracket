import DocumentFragment from "./DocumentFragment";
import DocumentOrShadowRoot from "./mixin/DocumentOrShadowRoot";

/* Implements https://dom.spec.whatwg.org/#shadowroot
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
class ShadowRoot extends DocumentFragment {
    get mode() { }
    get host() { }
    get onslotchange() { }
    set onslotchange(value) { }
}

Object.assign(ShadowRoot.prototype, DocumentOrShadowRoot);

const ShadowRootMode = {
    open: "open",
    closed: "closed"
};
Object.freeze(ShadowRootMode);

export default ShadowRoot;
export { ShadowRootMode };
