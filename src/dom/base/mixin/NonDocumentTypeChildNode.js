/* Implements https://dom.spec.whatwg.org/#nondocumenttypechildnode
 *
 * interface mixin NonDocumentTypeChildNode {
 *   readonly attribute Element? previousElementSibling;
 *   readonly attribute Element? nextElementSibling;
 * };
 * Element includes NonDocumentTypeChildNode;
 * CharacterData includes NonDocumentTypeChildNode;
 */
const NonDocumentTypeChildNode = {
    get previousElementSibling() { },
    get nextElementSibling() { }
};

export default NonDocumentTypeChildNode;
