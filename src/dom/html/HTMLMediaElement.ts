import AudioTrackList from "./AudioTrackList";
import HTMLElement from "./HTMLElement";
import MediaError from "./MediaError";
import TextTrack from "./TextTrack";
import TextTrackList from "./TextTrackList";
import TimeRanges from "./TimeRanges";
import VideoTrackList from "./VideoTrackList";

/* https://html.spec.whatwg.org/multipage/media.html#media-elements
 *
 * enum CanPlayTypeResult { "", "maybe", "probably" };
 * typedef (MediaStream or MediaSource or Blob) MediaProvider;
 *
 * [Exposed=Window]
 * interface HTMLMediaElement : HTMLElement {
 *
 *   // error state
 *   readonly attribute MediaError? error;
 *
 *   // network state
 *   [CEReactions] attribute USVString src;
 *   attribute MediaProvider? srcObject;
 *   readonly attribute USVString currentSrc;
 *   [CEReactions] attribute DOMString? crossOrigin;
 *   const unsigned short NETWORK_EMPTY = 0;
 *   const unsigned short NETWORK_IDLE = 1;
 *   const unsigned short NETWORK_LOADING = 2;
 *   const unsigned short NETWORK_NO_SOURCE = 3;
 *   readonly attribute unsigned short networkState;
 *   [CEReactions] attribute DOMString preload;
 *   readonly attribute TimeRanges buffered;
 *   void load();
 *   CanPlayTypeResult canPlayType(DOMString type);
 *
 *   // ready state
 *   const unsigned short HAVE_NOTHING = 0;
 *   const unsigned short HAVE_METADATA = 1;
 *   const unsigned short HAVE_CURRENT_DATA = 2;
 *   const unsigned short HAVE_FUTURE_DATA = 3;
 *   const unsigned short HAVE_ENOUGH_DATA = 4;
 *   readonly attribute unsigned short readyState;
 *   readonly attribute boolean seeking;
 *
 *   // playback state
 *   attribute double currentTime;
 *   void fastSeek(double time);
 *   readonly attribute unrestricted double duration;
 *   object getStartDate();
 *   readonly attribute boolean paused;
 *   attribute double defaultPlaybackRate;
 *   attribute double playbackRate;
 *   readonly attribute TimeRanges played;
 *   readonly attribute TimeRanges seekable;
 *   readonly attribute boolean ended;
 *   [CEReactions] attribute boolean autoplay;
 *   [CEReactions] attribute boolean loop;
 *   Promise<void> play();
 *   void pause();
 *
 *   // controls
 *   [CEReactions] attribute boolean controls;
 *   attribute double volume;
 *   attribute boolean muted;
 *   [CEReactions] attribute boolean defaultMuted;
 *
 *   // tracks
 *   [SameObject] readonly attribute AudioTrackList audioTracks;
 *   [SameObject] readonly attribute VideoTrackList videoTracks;
 *   [SameObject] readonly attribute TextTrackList textTracks;
 *   TextTrack addTextTrack(TextTrackKind kind, optional DOMString label = "", optional DOMString language = "");
 * };
 */
type CanPlayTypeResult = "" | "maybe" | "probably";

// TODO: type is `MediaStream | MediaSource | Blob`
type MediaProvider = any;

class HTMLMediaElement extends HTMLElement {
    get error(): MediaError | null { throw ""; }


    get src(): string { throw ""; }
    set src(value: string) { throw ""; }

    get srcObject(): MediaProvider | null { throw ""; }
    set srcObject(value: MediaProvider | null) { throw ""; }

    get currentSrc(): string { throw ""; }

    get crossOrigin(): string | null { throw ""; }
    set crossOrigin(value: string | null) { throw ""; }

    static readonly NETWORK_EMPTY = 0;
    static readonly NETWORK_IDLE = 1;
    static readonly NETWORK_LOADING = 2;
    static readonly NETWORK_NO_SOURCE = 3;

    get networkState(): number { throw ""; }

    get preload(): string { throw ""; }
    set preload(value: string) { throw ""; }

    get buffered(): TimeRanges { throw ""; }
    set buffered(value: TimeRanges) { throw ""; }

    load(): void { throw ""; }

    canPlayType(type: string): CanPlayTypeResult { throw ""; }


    static readonly HAVE_NOTHING = 0;
    static readonly HAVE_METADATA = 1;
    static readonly HAVE_CURRENT_DATA = 2;
    static readonly HAVE_FUTURE_DATA = 3;
    static readonly HAVE_ENOUGH_DATA = 4;

    get readyState(): number { throw ""; }
    set readyState(value: number) { throw ""; }

    get seeking(): boolean { throw ""; }
    set seeking(value: boolean) { throw ""; }


    get currentTime(): number { throw ""; }
    set currentTime(value: number) { throw ""; }

    fastSeek(time: number): void { throw ""; }

    get duration(): number { throw ""; }

    getStartDate(): any { throw ""; }

    get paused(): boolean { throw ""; }

    get defaultPlaybackRate(): number { throw ""; }
    set defaultPlaybackRate(value: number) { throw ""; }

    get playbackRate(): number { throw ""; }
    set playbackRate(value: number) { throw ""; }

    get played(): TimeRanges { throw ""; }

    get seekable(): TimeRanges { throw ""; }

    get ended(): boolean { throw ""; }

    get autoplay(): boolean { throw ""; }
    set autoplay(value: boolean) { throw ""; }

    get loop(): boolean { throw ""; }
    set loop(value: boolean) { throw ""; }

    play(): Promise<void> { throw ""; }

    pause(): void { throw ""; }


    get controls(): number { throw ""; }
    set controls(value: number) { throw ""; }

    get volume(): number { throw ""; }
    set volume(value: number) { throw ""; }

    get muted(): boolean { throw ""; }
    set muted(value: boolean) { throw ""; }

    get defaultMuted(): boolean { throw ""; }
    set defaultMuted(value: boolean) { throw ""; }


    get audioTracks(): AudioTrackList { throw ""; }

    get videoTracks(): VideoTrackList { throw ""; }

    get textTracks(): TextTrackList { throw ""; }

    addTextTrack(kind: TextTrack, label: string = "", language = ""): TextTrack { throw ""; }
}

export { CanPlayTypeResult };
export { MediaProvider };
export default HTMLMediaElement;
