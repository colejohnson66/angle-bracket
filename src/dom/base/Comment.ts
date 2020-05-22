import CharacterData from "./CharacterData";

/* https://dom.spec.whatwg.org/#interface-comment
 *
 * [Exposed=Window]
 * interface Comment : CharacterData {
 *   constructor(optional DOMString data = "");
 * };
 */
class Comment extends CharacterData {
    constructor(data = "") {
        super();
        throw "";
    }
}

export default Comment;
