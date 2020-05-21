import Event from "./Event";

/* Implements https://dom.spec.whatwg.org/#customevent
 *
 * [Exposed=(Window,Worker)]
 * interface CustomEvent : Event {
 *   constructor(DOMString type, optional CustomEventInit eventInitDict = {});
 *
 *   readonly attribute any detail;
 *
 *   void initCustomEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false, optional any detail = null); // historical
 * };
 *
 * dictionary CustomEventInit : EventInit {
 *   any detail = null;
 * };
 */
class CustomEvent extends Event {
    constructor(type, eventInitDict = {}) { }

    get detail() { }

    initCustomEvent(type, bubbles = false, cancelable = false, detail = null) { } // historical
}

export default CustomEvent;
