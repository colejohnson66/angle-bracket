/* Implements https://dom.spec.whatwg.org/#mutationobserver
 *
 * [Exposed=Window]
 * interface MutationObserver {
 *   constructor(MutationCallback callback);
 *
 *   void observe(Node target, optional MutationObserverInit options = {});
 *   void disconnect();
 *   sequence<MutationRecord> takeRecords();
 * };
 *
 * callback MutationCallback = void (sequence<MutationRecord> mutations, MutationObserver observer);
 *
 * dictionary MutationObserverInit {
 *   boolean childList = false;
 *   boolean attributes;
 *   boolean characterData;
 *   boolean subtree = false;
 *   boolean attributeOldValue;
 *   boolean characterDataOldValue;
 *   sequence<DOMString> attributeFilter;
 * };
 */
class MutationObserver {
    constructor(callback) { }

    observe(target, options = {}) { }
    disconnect() { }
    takeRecords() { }
}

export default MutationObserver;
