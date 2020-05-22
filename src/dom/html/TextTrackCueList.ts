/* https://html.spec.whatwg.org/multipage/media.html#text-track-api
 *
 * [Exposed=Window]
 * interface TextTrackCueList {
 *   readonly attribute unsigned long length;
 *   getter TextTrackCue (unsigned long index);
 *   TextTrackCue? getCueById(DOMString id);
 * };
 */
// TODO: TextTrackCue types
class TextTrackCueList {
    get length(): number { throw ""; }

    getter(index: number) { throw ""; }

    getCueById(id: string) { throw ""; }
}

export default TextTrackCueList;
