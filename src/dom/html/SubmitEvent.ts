import Event, { EventInit } from "../base/Event";

import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-submitevent-interface
 *
 * [Exposed=Window]
 * interface SubmitEvent : Event {
 *   constructor(DOMString type, optional SubmitEventInit eventInitDict = {});
 *
 *   readonly attribute HTMLElement? submitter;
 * };
 *
 * dictionary SubmitEventInit : EventInit {
 *   HTMLElement? submitter = null;
 * };
 */
class SubmitEvent extends Event {
    constructor(type: string, eventInitDict: SubmitEventInit = SubmitEventInit.default) {
        super(type, eventInitDict);
        throw "";
    }


    get submitter(): HTMLElement | null { throw ""; }
}

class SubmitEventInit extends EventInit {
    static readonly default: SubmitEventInit = {
        ...EventInit.default,
        submitter: null
    }

    submitter: HTMLElement | null;
}

export default SubmitEvent;
export { SubmitEventInit };
