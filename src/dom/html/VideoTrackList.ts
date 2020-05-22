import { EventTarget } from "../base/index";

/* https://html.spec.whatwg.org/multipage/media.html#audiotracklist-and-videotracklist-objects
 *
 * [Exposed=Window]
 * interface VideoTrackList : EventTarget {
 *   readonly attribute unsigned long length;
 *   getter VideoTrack (unsigned long index);
 *   VideoTrack? getTrackById(DOMString id);
 *   readonly attribute long selectedIndex;
 *
 *   attribute EventHandler onchange;
 *   attribute EventHandler onaddtrack;
 *   attribute EventHandler onremovetrack;
 * };
 *
 * [Exposed=Window]
 * interface VideoTrack {
 *   readonly attribute DOMString id;
 *   readonly attribute DOMString kind;
 *   readonly attribute DOMString label;
 *   readonly attribute DOMString language;
 *   attribute boolean selected;
 * };
 */
// TODO: `on...` are of type `EventHandler`
class VideoTrackList extends EventTarget {
    get length(): number { throw ""; }

    getter(index: number): VideoTrack { throw ""; }

    getTrackById(id: string): VideoTrack | null { throw ""; }

    get selectedIndex(): number { throw ""; }


    get onchange() { throw ""; }
    set onchange(value) { throw ""; }

    get onaddtrack() { throw ""; }
    set onaddtrack(value) { throw ""; }

    get onremovetrack() { throw ""; }
    set onremovetrack(value) { throw ""; }
}

class VideoTrack {
    get id(): string { throw ""; }

    get kind(): string { throw ""; }

    get label(): string { throw ""; }

    get language(): string { throw ""; }

    get selected(): boolean { throw ""; }
    set selected(value: boolean) { throw ""; }
}

export default VideoTrackList;
export { VideoTrack };
