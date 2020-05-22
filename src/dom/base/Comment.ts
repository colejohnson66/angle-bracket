import CharacterData from "./CharacterData";

/* https://dom.spec.whatwg.org/#interface-comment
 *
 * [Exposed=Window]
 * interface Comment : CharacterData {
 *   constructor(optional DOMString data = "");
 * };
 */
class Comment extends CharacterData {
    private _data: string;

    constructor(data = "") {
        super();
        this._data = data;
    }
}

export default Comment;
