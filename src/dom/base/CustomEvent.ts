import Event, { EventInit } from "./Event";

/* https://dom.spec.whatwg.org/#interface-customevent
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
    constructor(type: string, eventInitDict: CustomEventInit = CustomEventInit.default) {
        super(type, eventInitDict);
        throw "";
    }


    get detail(): any { throw ""; }


    initCustomEvent(type: string, bubbles: boolean = false, cancelable: boolean = false, detail: any = null) { throw ""; } // historical
}

class CustomEventInit extends EventInit {
    static readonly default: CustomEventInit = {
        ...EventInit.default,
        detail: null
    }

    detail?: any;
}

export default CustomEvent;
export { CustomEventInit };
