/* Implements https://dom.spec.whatwg.org/#interface-event
 *
 * [Exposed=(Window,Worker,AudioWorklet)]
 * interface Event {
 *   constructor(DOMString type, optional EventInit eventInitDict = {});
 *
 *   readonly attribute DOMString type;
 *   readonly attribute EventTarget? target;
 *   readonly attribute EventTarget? srcElement; // historical
 *   readonly attribute EventTarget? currentTarget;
 *   sequence<EventTarget> composedPath();
 *
 *   const unsigned short NONE = 0;
 *   const unsigned short CAPTURING_PHASE = 1;
 *   const unsigned short AT_TARGET = 2;
 *   const unsigned short BUBBLING_PHASE = 3;
 *   readonly attribute unsigned short eventPhase;
 *
 *   void stopPropagation();
 *            attribute boolean cancelBubble; // historical alias of .stopPropagation
 *   void stopImmediatePropagation();
 *
 *   readonly attribute boolean bubbles;
 *   readonly attribute boolean cancelable;
 *            attribute boolean returnValue;  // historical
 *   void preventDefault();
 *   readonly attribute boolean defaultPrevented;
 *   readonly attribute boolean composed;
 *
 *   [LegacyUnforgeable] readonly attribute boolean isTrusted;
 *   readonly attribute DOMHighResTimeStamp timeStamp;
 *
 *   void initEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false); // historical
 * };
 *
 * dictionary EventInit {
 *   boolean bubbles = false;
 *   boolean cancelable = false;
 *   boolean composed = false;
 * };
 */
class Event {
    constructor(type, eventInitDict = {}) { }

    get type() { }
    get target() { }
    get srcElement() { } // historical
    get currentTarget() { }
    composedPath() { }

    get NONE() { return 0; }
    get CAPTURING_PHASE() { return 1; }
    get AT_TARGET() { return 2; }
    get BUBBLING_PHASE() { return 3; }
    get eventPhase() { }

    stopPropagation() { }
    set cancelBubble() { } // historical alias of .stopPropagation
    stopImmediatePropagation() { }

    get bubbles() { }
    get cancelable() { }
    get returnValue() { } // historical
    set returnValue(value) { } // historical
    get defaultPrevented() { }
    get composed() { }

    get isTrusted() { }
    get timeStamp() { }

    initEvent(type, bubbles = false, cancelable = false) { } // historical
}

export default Event;
