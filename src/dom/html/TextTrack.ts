import { EventTarget } from "../base/index";
import TextTrackCue from "./TextTrackCue";
import TextTrackCueList from "./TextTrackCueList";

/* https://html.spec.whatwg.org/multipage/media.html#text-track-api
 *
 * enum TextTrackMode { "disabled",  "hidden",  "showing" };
 * enum TextTrackKind { "subtitles",  "captions",  "descriptions",  "chapters",  "metadata" };
 *
 * [Exposed=Window]
 * interface TextTrack : EventTarget {
 *   readonly attribute TextTrackKind kind;
 *   readonly attribute DOMString label;
 *   readonly attribute DOMString language;
 *
 *   readonly attribute DOMString id;
 *   readonly attribute DOMString inBandMetadataTrackDispatchType;
 *
 *   attribute TextTrackMode mode;
 *
 *   readonly attribute TextTrackCueList? cues;
 *   readonly attribute TextTrackCueList? activeCues;
 *
 *   void addCue(TextTrackCue cue);
 *   void removeCue(TextTrackCue cue);
 *
 *   attribute EventHandler oncuechange;
 * };
 */
type TextTrackMode = "disabled" | "hidden" | "showing";

type TextTrackKind = "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";

// TODO: `oncuechange` is of type `EventHandler`
class TextTrack extends EventTarget {
    get kind(): TextTrackKind { throw ""; }

    get label(): string { throw ""; }

    get language(): string { throw ""; }


    get id(): string { throw ""; }

    get inBandMetadataTrackDispatchType(): string { throw ""; }


    get mode(): TextTrackMode { throw ""; }
    set mode(value: TextTrackMode) { throw ""; }


    get cues(): TextTrackCueList | null { throw ""; }

    get activeCues(): TextTrackCueList | null { throw ""; }


    addCue(cue: TextTrackCue): void { throw ""; }

    removeCue(cue: TextTrackCue): void { throw ""; }


    get oncuechange() { throw ""; }
    set oncuechange(value) { throw ""; }
}


export { TextTrackMode };
export { TextTrackKind };
export default TextTrack;
