import Event, { EventInit } from "../base/Event";

import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-formdataevent-interface
 *
 * [Exposed=Window]
 * interface FormDataEvent : Event {
 *   constructor(DOMString type, FormDataEventInit eventInitDict);
 *
 *   readonly attribute FormData formData;
 * };
 *
 * dictionary FormDataEventInit : EventInit {
 *   required FormData formData;
 * };
 */
// TODO: `formData` is of type `FormData`
class FormDataEvent extends Event {
    constructor(type: string, eventInitDict: FormDataEventInit) {
        super(type, eventInitDict);
        throw "";
    }


    get formData() { throw ""; }
}

// TODO: `formData` is of type `FormData`
class FormDataEventInit extends EventInit {
    formData;
}

export default FormDataEvent;
export { FormDataEventInit };
