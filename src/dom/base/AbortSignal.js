/* Implements https://dom.spec.whatwg.org/#abortsignal
 *
 * [Exposed=(Window,Worker)]
 * interface AbortSignal : EventTarget {
 *   readonly attribute boolean aborted;
 *
 *   attribute EventHandler onabort;
 * };
 */
class AbortSignal {
    get aborted() { }

    get onabort() { }
    set onabort(value) { }
}

export default AbortSignal;
