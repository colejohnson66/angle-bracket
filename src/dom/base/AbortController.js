/* Implements https://dom.spec.whatwg.org/#interface-abortcontroller
 *
 * [Exposed=(Window,Worker)]
 * interface AbortController {
 *   constructor();
 *
 *   [SameObject] readonly attribute AbortSignal signal;
 *
 *   void abort();
 * };
 */
class AbortController {
    constructor() { }

    get signal() { }

    abort() { }
}

export default AbortController;
