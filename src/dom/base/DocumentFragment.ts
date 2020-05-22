import Node from "./Node";
import ParentNode from "./mixin/ParentNode";

/* https://dom.spec.whatwg.org/#interface-documentfragment
 *
 * [Exposed=Window]
 * interface DocumentFragment : Node {
 *   constructor();
 * };
 */
class DocumentFragment extends Node {
    constructor() {
        super();
        throw "";
    }
}

Object.assign(DocumentFragment.prototype, ParentNode);

export default DocumentFragment;
