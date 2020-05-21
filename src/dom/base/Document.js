import Node from "./Node";
import NodeFilter from "./NodeFilter";
import DocumentOrShadowRoot from "./mixin/DocumentOrShadowRoot";
import ParentNode from "./mixin/ParentNode";
import XPathEvaluatorBase from "./mixin/XPathEvaluatorBase";

/* Implements https://dom.spec.whatwg.org/#document
 *
 * [Exposed=Window]
 * interface Document : Node {
 *   constructor();
 *
 *   [SameObject] readonly attribute DOMImplementation implementation;
 *   readonly attribute USVString URL;
 *   readonly attribute USVString documentURI;
 *   readonly attribute DOMString compatMode;
 *   readonly attribute DOMString characterSet;
 *   readonly attribute DOMString charset; // historical alias of .characterSet
 *   readonly attribute DOMString inputEncoding; // historical alias of .characterSet
 *   readonly attribute DOMString contentType;
 *
 *   readonly attribute DocumentType? doctype;
 *   readonly attribute Element? documentElement;
 *   HTMLCollection getElementsByTagName(DOMString qualifiedName);
 *   HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
 *   HTMLCollection getElementsByClassName(DOMString classNames);
 *
 *   [CEReactions, NewObject] Element createElement(DOMString localName, optional (DOMString or ElementCreationOptions) options = {});
 *   [CEReactions, NewObject] Element createElementNS(DOMString? namespace, DOMString qualifiedName, optional (DOMString or ElementCreationOptions) options = {});
 *   [NewObject] DocumentFragment createDocumentFragment();
 *   [NewObject] Text createTextNode(DOMString data);
 *   [NewObject] CDATASection createCDATASection(DOMString data);
 *   [NewObject] Comment createComment(DOMString data);
 *   [NewObject] ProcessingInstruction createProcessingInstruction(DOMString target, DOMString data);
 *
 *   [CEReactions, NewObject] Node importNode(Node node, optional boolean deep = false);
 *   [CEReactions] Node adoptNode(Node node);
 *
 *   [NewObject] Attr createAttribute(DOMString localName);
 *   [NewObject] Attr createAttributeNS(DOMString? namespace, DOMString qualifiedName);
 *
 *   [NewObject] Event createEvent(DOMString interface); // historical
 *
 *   [NewObject] Range createRange();
 *
 *   // NodeFilter.SHOW_ALL = 0xFFFFFFFF
 *   [NewObject] NodeIterator createNodeIterator(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
 *   [NewObject] TreeWalker createTreeWalker(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
 * };
 *
 * [Exposed=Window]
 * interface XMLDocument : Document {};
 *
 * dictionary ElementCreationOptions {
 *   DOMString is;
 * };
 */
class Document extends Node {
    constructor() { }

    get implementation() { }
    get URL() { }
    get documentURI() { }
    get compatMode() { }
    get characterSet() { }
    get charset() { } // historical alias of .characterSet
    get inputEncoding() { } // historical alias of .characterSet
    get contentType() { }

    get doctype() { }
    get documentElement() { }
    getElementsByTagName(qualifiedName) { }
    getElementsByTagNameNS(namespace, localName) { }
    getElementsByClassName(classNames) { }

    createElement(localName, options = {}) { }
    createElementNS(namespace, qualifiedName, options = {}) { }
    createDocumentFragment() { }
    createTextNode(data) { }
    createCDATASection(data) { }
    createComment(data) { }
    createProcessingInstruction(target, data) { }

    importNode(node, deep = false) { }
    adoptNode(node) { }

    createAttribute(localName) { }
    createAttributeNS(namespace, qualifiedName) { }

    createEvent(interface) { } // historical

    createRange() { }

    createNodeIterator(root, whatToShow = NodeFilter.SHOW_ALL, filter = null) { }
    createTreeWalker(root, whatToShow = NodeFilter.SHOW_ALL, filter = null) { }
}

Object.assign(Document.prototype, DocumentOrShadowRoot);
Object.assign(Document.prototype, ParentNode);
Object.assign(Document.prototype, XPathEvaluatorBase);

class XMLDocument extends Document { }

export default Document;
export { XMLDocument };
