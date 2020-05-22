import { EventTarget } from "../base/index";
import TextTrack from "./TextTrack";

/* https://html.spec.whatwg.org/multipage/media.html#text-track-api
 *
 * [Exposed=Window]
 * interface TextTrackCue : EventTarget {
 *   readonly attribute TextTrack? track;
 *
 *   attribute DOMString id;
 *   attribute double startTime;
 *   attribute double endTime;
 *   attribute boolean pauseOnExit;
 *
 *   attribute EventHandler onenter;
 *   attribute EventHandler onexit;
 * };
 */
// TODO: `on...` are of type `EventHandler`
class TextTrackCue extends EventTarget {
    get track(): TextTrack | null { throw ""; }


    get id(): string { throw ""; }
    set id(value: string) { throw ""; }

    get startTime(): number { throw ""; }
    set startTime(value: number) { throw ""; }

    get endTime(): number { throw ""; }
    set endTime(value: number) { throw ""; }

    get pauseOnExit(): boolean { throw ""; }
    set pauseOnExit(value: boolean) { throw ""; }


    get onenter() { throw ""; }
    set onenter(value) { throw ""; }

    get onexit() { throw ""; }
    set onexit(value) { throw ""; }
}

export default TextTrackCue;
