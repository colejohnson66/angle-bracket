import assert from "assert";

/* Implements https://dom.spec.whatwg.org/#node
 *
 * [Exposed=Window]
 * interface Node : EventTarget {
 *   const unsigned short ELEMENT_NODE = 1;
 *   const unsigned short ATTRIBUTE_NODE = 2;
 *   const unsigned short TEXT_NODE = 3;
 *   const unsigned short CDATA_SECTION_NODE = 4;
 *   const unsigned short ENTITY_REFERENCE_NODE = 5; // historical
 *   const unsigned short ENTITY_NODE = 6; // historical
 *   const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
 *   const unsigned short COMMENT_NODE = 8;
 *   const unsigned short DOCUMENT_NODE = 9;
 *   const unsigned short DOCUMENT_TYPE_NODE = 10;
 *   const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
 *   const unsigned short NOTATION_NODE = 12; // historical
 *   readonly attribute unsigned short nodeType;
 *   readonly attribute DOMString nodeName;
 *
 *   readonly attribute USVString baseURI;
 *
 *   readonly attribute boolean isConnected;
 *   readonly attribute Document? ownerDocument;
 *   Node getRootNode(optional GetRootNodeOptions options = {});
 *   readonly attribute Node? parentNode;
 *   readonly attribute Element? parentElement;
 *   boolean hasChildNodes();
 *   [SameObject] readonly attribute NodeList childNodes;
 *   readonly attribute Node? firstChild;
 *   readonly attribute Node? lastChild;
 *   readonly attribute Node? previousSibling;
 *   readonly attribute Node? nextSibling;
 *
 *   [CEReactions] attribute DOMString? nodeValue;
 *   [CEReactions] attribute DOMString? textContent;
 *   [CEReactions] void normalize();
 *
 *   [CEReactions, NewObject] Node cloneNode(optional boolean deep = false);
 *   boolean isEqualNode(Node? otherNode);
 *   boolean isSameNode(Node? otherNode); // historical alias of ===
 *
 *   const unsigned short DOCUMENT_POSITION_DISCONNECTED = 0x01;
 *   const unsigned short DOCUMENT_POSITION_PRECEDING = 0x02;
 *   const unsigned short DOCUMENT_POSITION_FOLLOWING = 0x04;
 *   const unsigned short DOCUMENT_POSITION_CONTAINS = 0x08;
 *   const unsigned short DOCUMENT_POSITION_CONTAINED_BY = 0x10;
 *   const unsigned short DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
 *   unsigned short compareDocumentPosition(Node other);
 *   boolean contains(Node? other);
 *
 *   DOMString? lookupPrefix(DOMString? namespace);
 *   DOMString? lookupNamespaceURI(DOMString? prefix);
 *   boolean isDefaultNamespace(DOMString? namespace);
 *
 *   [CEReactions] Node insertBefore(Node node, Node? child);
 *   [CEReactions] Node appendChild(Node node);
 *   [CEReactions] Node replaceChild(Node node, Node child);
 *   [CEReactions] Node removeChild(Node child);
 * };
 *
 * dictionary GetRootNodeOptions {
 *   boolean composed = false;
 * };
 */
// TODO: Should EventTarget be created and this extended from it?
class Node {
    static get ELEMENT_NODE() { return 1; }
    static get ATTRIBUTE_NODE() { return 2; }
    static get TEXT_NODE() { return 3; }
    static get CDATA_SECTION_NODE() { return 4; }
    static get ENTITY_REFERENCE_NODE() { return 5; } // historical
    static get ENTITY_NODE() { return 6; } //historical
    static get PROCESSING_INSTRUCTION_NODE() { return 7; }
    static get COMMENT_NODE() { return 8; }
    static get DOCUMENT_NODE() { return 9; }
    static get DOCUMENT_TYPE_NODE() { return 10; }
    static get DOCUMENT_FRAGMENT_NODE() { return 11; }
    static get NOTATION_NODE() { return 12; } // historical
    get nodeType() {
        return this._nodeType;
    }
    // TODO: https://dom.spec.whatwg.org/#dom-node-nodename
    get nodeName() {
        let type = this._nodeType;
        if (type === Node.ELEMENT_NODE)
            return "TODO"; // TODO: "Its HTML-uppercased qualified name"
        if (type === Node.ATTRIBUTE_NODE)
            return "TODO"; // TODO: "Its qualified name"
        if (type === Node.TEXT_NODE)
            return "#text";
        if (type === Node.CDATA_SECTION_NODE)
            return "#cdata-section";
        if (type === Node.PROCESSING_INSTRUCTION_NODE)
            return "TODO:"; // TODO: "Its target"
        if (type === Node.COMMENT_NODE)
            return "#comment";
        if (type === Node.DOCUMENT_NODE)
            return "#document";
        if (type === Node.DOCUMENT_TYPE_NODE)
            return "TODO:"; // TODO: "Its name"
        if (type === Node.DOCUMENT_FRAGMENT_NODE)
            return "#document-fragment";

        assert.strict.ok(false, "Invalid nodeType");
    }

    get baseURI() { }
    get isConnected() { }
    get ownerDocument() {
        if (type === Node.DOCUMENT_NODE)
            return null;
        return this._ownerDocument;
    }
    getRootNode(options) { }
    get parentNode() {
        return this._parentNode;
    }
    get parentElement() {
        let parent = this._parentNode;
        if (parent.nodeType === Node.ELEMENT_NODE)
            return parent;
        return null;
    }
    hasChildNodes() {
        return this._children.length !== 0;
    }
    get childNodes() {
        return this._children;
    }
    get firstChild() {
        let children = this._children;
        if (children.length === 0)
            return null;
        return children[0];
    }
    get lastChild() {
        let children = this._children;
        if (children.length === 0)
            return null;
        return children[children.length - 1];
    }
    get previousSibling() { }
    get nextSibling() { }

    get nodeValue() { }
    set nodeValue(value) { }
    get textContent() { }
    set textContent(value) { }
    normalize() { }

    cloneNode(deep = false) { }
    isEqualNode(otherNode) { }
    isSameNode(otherNode) { }

    static get DOCUMENT_POSITION_DISCONNECTED() { return 0x01; }
    static get DOCUMENT_POSITION_PRECEDING() { return 0x02; }
    static get DOCUMENT_POSITION_FOLLOWING() { return 0x04; }
    static get DOCUMENT_POSITION_CONTAINS() { return 0x08; }
    static get DOCUMENT_POSITION_CONTAINED_BY() { return 0x10; }
    static get DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC() { return 0x20; }
    compareDocumentPosition(other) { }
    contains(other) { }

    lookupPrefix(namespace) { }
    lookupNamespaceURI(prefix) { }
    isDefaultNamespace(namespace) { }

    insertBefore(node, child) { }
    appendChild(node) { }
    replaceChild(node, child) { }
    removeChild(child) { }
}

export default Node;
