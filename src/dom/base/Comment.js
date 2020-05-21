import CharacterData from "./CharacterData";

/* Implements https://dom.spec.whatwg.org/#comment
 *
 * [Exposed=Window]
 * interface Comment : CharacterData {
 *   constructor(optional DOMString data = "");
 * };
 */
class Comment extends CharacterData {
    constructor(data = "") {
        this._data = data;
    }
}

export default Comment;
