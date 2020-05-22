/* https://dom.spec.whatwg.org/#interface-AbortSignal
 *
 * [Exposed=(Window,Worker)]
 * interface AbortSignal : EventTarget {
 *   readonly attribute boolean aborted;
 *
 *   attribute EventHandler onabort;
 * };
 */
// TODO: Add types to onabort
class AbortSignal {
    get aborted(): boolean { throw ""; }


    get onabort() { throw ""; }

    set onabort(value) { throw ""; }
}

export default AbortSignal;
