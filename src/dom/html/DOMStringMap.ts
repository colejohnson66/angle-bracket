/* https://html.spec.whatwg.org/multipage/dom.html#domstringmap
 *
 * [Exposed=Window,
 *  LegacyOverrideBuiltIns]
 * interface DOMStringMap {
 *   getter DOMString (DOMString name);
 *   [CEReactions] setter void (DOMString name, DOMString value);
 *   [CEReactions] deleter void (DOMString name);
 * };
 */
class DOMStringMap {
    getter(name: string): string { throw ""; }
    setter(name: string, value: string): void { throw ""; }
    deleter(name: string): void { throw ""; }
}

export default DOMStringMap;
