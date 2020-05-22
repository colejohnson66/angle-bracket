import { EventTarget, Text } from "../base/index";

import TextTrack from "./TextTrack";

/* https://html.spec.whatwg.org/multipage/media.html#text-track-api
 *
 * [Exposed=Window]
 * interface TextTrackList : EventTarget {
 *   readonly attribute unsigned long length;
 *   getter TextTrack (unsigned long index);
 *   TextTrack? getTrackById(DOMString id);
 *
 *   attribute EventHandler onchange;
 *   attribute EventHandler onaddtrack;
 *   attribute EventHandler onremovetrack;
 * };
 */
// TODO: `on...` are of type `EventHandler`
class TextTrackList extends EventTarget {
    get length(): number { throw ""; }

    getter(index: number): TextTrack { throw ""; }

    getTrackById(id: string): TextTrack | null { throw ""; }


    get onchange() { throw ""; }
    set onchange(value) { throw ""; }

    get onaddtrack() { throw ""; }
    set onaddtrack(value) { throw ""; }

    get onremovetrack() { throw ""; }
    set onremovetrack(value) { throw ""; }
}

export default TextTrackList;
