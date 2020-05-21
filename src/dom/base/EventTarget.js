/* Implements https://dom.spec.whatwg.org/#eventtarget
 *
 * [Exposed=(Window,Worker,AudioWorklet)]
 * interface EventTarget {
 *   constructor();
 *
 *   void addEventListener(DOMString type, EventListener? callback, optional (AddEventListenerOptions or boolean) options = {});
 *   void removeEventListener(DOMString type, EventListener? callback, optional (EventListenerOptions or boolean) options = {});
 *   boolean dispatchEvent(Event event);
 * };
 *
 * callback interface EventListener {
 *   void handleEvent(Event event);
 * };
 *
 * dictionary EventListenerOptions {
 *   boolean capture = false;
 * };
 *
 * dictionary AddEventListenerOptions : EventListenerOptions {
 *   boolean passive = false;
 *   boolean once = false;
 * };
 */
class EventTarget {
    constructor() { }

    addEventListener(type, callback, options = {}) { }
    removeEventListener(type, callback, options = {}) { }
    dispatchEvent(event) { }
}

export default EventTarget;
