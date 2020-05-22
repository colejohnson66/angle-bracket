import Node from "./Node";
import ParentNode from "./mixin/ParentNode";
import { applyMixins } from "../../applyMixins";

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

applyMixins(DocumentFragment, ParentNode);

export default DocumentFragment;
