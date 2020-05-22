import EventTarget from "./EventTarget";

/* https://dom.spec.whatwg.org/#interface-event
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
    constructor(type: string, eventInitDict: EventInit = EventInit.default) { throw ""; }


    get type(): string { throw ""; }

    get target(): EventTarget | null { throw ""; }

    get srcElement(): EventTarget | null { throw ""; } // historical

    get currentTarget(): EventTarget | null { throw ""; }

    composedPath(): EventTarget[] { throw ""; }


    static readonly NONE = 0;
    static readonly CAPTURING_PHASE = 1;
    static readonly AT_TARGET = 2;
    static readonly BUBBLING_PHASE = 3;

    get eventPhase(): number { throw ""; }


    stopPropagation(): void { throw ""; }

    get cancelBubble(): boolean { throw ""; }
    set cancelBubble(value: boolean) { throw ""; } // historical alias of .stopPropagation

    stopImmediatePropagation(): void { throw ""; }


    get bubbles(): boolean { throw ""; }

    get cancelable(): boolean { throw ""; }

    get returnValue(): boolean { throw ""; } // historical
    set returnValue(value: boolean) { throw ""; } // historical

    get defaultPrevented(): boolean { throw ""; }

    get composed(): boolean { throw ""; }


    get isTrusted(): boolean { throw ""; }

    get timeStamp(): number { throw ""; }


    initEvent(type: string, bubbles: boolean = false, cancelable: boolean = false) { throw ""; } // historical
}

class EventInit {
    static readonly default: EventInit = {
        bubbles: false,
        cancelable: false,
        composed: false
    };

    bubbles: boolean;
    cancelable: boolean;
    composed: boolean;
}

export default Event;
export { EventInit };
