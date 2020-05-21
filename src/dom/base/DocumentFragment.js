import Node from "./Node";
import ParentNode from "./mixin/ParentNode";

/* Implements https://dom.spec.whatwg.org/#documentfragment
 *
 * [Exposed=Window]
 * interface DocumentFragment : Node {
 *   constructor();
 * };
 */
class DocumentFragment extends Node {
    constructor() { }
}

Object.assign(DocumentFragment.prototype, ParentNode);

export default DocumentFragment;
