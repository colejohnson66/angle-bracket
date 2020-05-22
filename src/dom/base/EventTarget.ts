import Event from "./Event";

/* https://dom.spec.whatwg.org/#interface-eventtarget
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
    constructor() { throw ""; }


    addEventListener(type: string, callback: EventListener | null, options: AddEventListenerOptions | boolean = AddEventListenerOptions.default): void { throw ""; }

    removeEventListener(type: string, callback: EventListener | null, options: EventListenerOptions | null = EventListenerOptions.default): void { throw ""; }

    dispatchEvent(event: Event): boolean { throw ""; }
}

interface EventListener {
    handleEvent(event: Event): void;
}

class EventListenerOptions {
    static readonly default: EventListenerOptions = {
        capture: false
    };

    capture: boolean;
}

class AddEventListenerOptions extends EventListenerOptions {
    static readonly default: AddEventListenerOptions = {
        ...EventListenerOptions.default,
        passive: false,
        once: false
    };

    passive: boolean;
    once: boolean;
}

export default EventTarget;
export { EventListener };
export { EventListenerOptions };
export { AddEventListenerOptions };
