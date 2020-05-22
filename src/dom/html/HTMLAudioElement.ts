import HTMLElement from "./HTMLElement";

/* https://html.spec.whatwg.org/multipage/media.html#the-audio-element
 *
 * [Exposed=Window,
 *  LegacyFactoryFunction=Audio(optional DOMString src)]
 * interface HTMLAudioElement : HTMLMediaElement {
 *   [HTMLConstructor] constructor();
 * };
 */
class HTMLAudioElement extends HTMLElement {
    constructor() {
        super();
        throw "";
    }
}

export default HTMLAudioElement;
