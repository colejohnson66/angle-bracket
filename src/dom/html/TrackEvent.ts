import Event, { EventInit } from "../base/Event";

import { AudioTrack } from "./AudioTrackList";
import TextTrack from "./TextTrack";
import { VideoTrack } from "./VideoTrackList";

/* https://html.spec.whatwg.org/multipage/media.html#the-trackevent-interface
 *
 * [Exposed=Window,
 *  Constructor(DOMString type, optional TrackEventInit eventInitDict = {})]
 * interface TrackEvent : Event {
 *   readonly attribute (VideoTrack or AudioTrack or TextTrack)? track;
 * };
 * 
 * dictionary TrackEventInit : EventInit {
 *   (VideoTrack or AudioTrack or TextTrack)? track = null;
 * };
 */
class TrackEvent extends Event {
    get track(): VideoTrack | AudioTrack | TextTrack | null { throw ""; }
}

class TrackEventInit extends EventInit {
    static readonly default: TrackEventInit = {
        ...EventInit.default,
        track: null
    };

    track: VideoTrack | AudioTrack | TextTrack | null;
}

export default TrackEvent;
export { TrackEventInit };
