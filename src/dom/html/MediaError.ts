/* https://html.spec.whatwg.org/multipage/media.html#error-codes
 *
 * [Exposed=Window]
 * interface MediaError {
 *   const unsigned short MEDIA_ERR_ABORTED = 1;
 *   const unsigned short MEDIA_ERR_NETWORK = 2;
 *   const unsigned short MEDIA_ERR_DECODE = 3;
 *   const unsigned short MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
 *
 *   readonly attribute unsigned short code;
 *   readonly attribute DOMString message;
 * };
 */
class MediaError {
    static readonly MEDIA_ERR_ABORTED = 1;
    static readonly MEDIA_ERR_NETWORK = 2;
    static readonly MEDIA_ERR_DECODE = 3;
    static readonly MEDIA_ERR_SRC_NOT_SUPPORTED = 4;


    get code(): number { throw ""; }

    get message(): string { throw ""; }
}

export default MediaError;
