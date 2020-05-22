import { EventTarget } from "../base/index";

/* https://html.spec.whatwg.org/multipage/media.html#audiotracklist-and-videotracklist-objects
 *
 * [Exposed=Window]
 * interface AudioTrackList : EventTarget {
 *   readonly attribute unsigned long length;
 *   getter AudioTrack (unsigned long index);
 *   AudioTrack? getTrackById(DOMString id);
 *
 *   attribute EventHandler onchange;
 *   attribute EventHandler onaddtrack;
 *   attribute EventHandler onremovetrack;
 * };
 *
 * [Exposed=Window]
 * interface AudioTrack {
 *   readonly attribute DOMString id;
 *   readonly attribute DOMString kind;
 *   readonly attribute DOMString label;
 *   readonly attribute DOMString language;
 *   attribute boolean enabled;
 * };
 */
// TODO: `on...` are of type `EventHandler`
class AudioTrackList extends EventTarget {
    get length(): number { throw ""; }

    getter(index: number): AudioTrack { throw ""; }

    getTrackById(id: string): AudioTrack | null { throw ""; }


    get onchange() { throw ""; }
    set onchange(value) { throw ""; }

    get onaddtrack() { throw ""; }
    set onaddtrack(value) { throw ""; }

    get onremovetrack() { throw ""; }
    set onremovetrack(value) { throw ""; }
}

class AudioTrack {
    get id(): string { throw ""; }

    get kind(): string { throw ""; }

    get label(): string { throw ""; }

    get language(): string { throw ""; }

    get enabled(): boolean { throw ""; }
    set enabled(value: boolean) { throw ""; }
}

export default AudioTrackList;
export { AudioTrack };
