import Attr from "./Attr";
import CDATASection from "./CDATASection";
import Comment from "./Comment";
import DOMImplementation from "./DOMImplementation";
import DocumentFragment from "./DocumentFragment";
import DocumentOrShadowRoot from "./mixin/DocumentOrShadowRoot";
import DocumentType from "./DocumentType";
import Element from "./Element";
import Event from "./Event";
import HTMLCollection from "./HTMLCollection";
import Node from "./Node";
import NodeFilter from "./NodeFilter";
import NodeIterator from "./NodeIterator";
import ParentNode from "./mixin/ParentNode";
import ProcessingInstruction from "./ProcessingInstruction";
import Range from "./Range";
import Text from "./Text";
import XPathEvaluatorBase from "./mixin/XPathEvaluatorBase";

/* https://dom.spec.whatwg.org/#interface-document
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
const defaultCreateElementOptions = {
    is: undefined
};

class Document extends Node {
    constructor() {
        super();
        throw "";
    }


    get implementation(): DOMImplementation { throw ""; }

    get URL(): string { throw ""; }

    get documentURI(): string { throw ""; }

    get compatMode(): string { throw ""; }

    get characterSet(): string { throw ""; }

    get charset(): string { throw ""; } // historical alias of .characterSet

    get inputEncoding(): string { throw ""; } // historical alias of .characterSet

    get contentType(): string { throw ""; }


    get doctype(): DocumentType | null { throw ""; }

    get documentElement(): Element | null { throw ""; }

    getElementsByTagName(qualifiedName: string): HTMLCollection { throw ""; }

    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollection { throw ""; }

    getElementsByClassName(classNames: string): HTMLCollection { throw ""; }


    createElement(localName: string, options: string | ElementCreationOptions = ElementCreationOptions.default): Element { throw ""; }

    createElementNS(namespace: string, qualifiedName: string, options: string | ElementCreationOptions = ElementCreationOptions.default): Element { throw ""; }

    createDocumentFragment(): DocumentFragment { throw ""; }

    createTextNode(data: string): Text { throw ""; }

    createCDATASection(data: string): CDATASection { throw ""; }

    createComment(data: string): Comment { throw ""; }

    createProcessingInstruction(target: string, data: string): ProcessingInstruction { throw ""; }


    importNode(node: Node, deep: boolean = false): Node { throw ""; }

    adoptNode(node: Node): Node { throw ""; }


    createAttribute(localName: string): Attr { throw ""; }

    createAttributeNS(namespace: string, qualifiedName: string): Attr { throw ""; }


    createEvent(interface_: string): Event { throw ""; } // historical


    createRange(): Range { throw ""; }


    createNodeIterator(root: Node, whatToShow: number = NodeFilter.SHOW_ALL, filter: NodeFilter = null): NodeIterator { throw ""; }

    createTreeWalker(root: Node, whatToShow: number = NodeFilter.SHOW_ALL, filter: NodeFilter = null): NodeIterator { throw ""; }
}

Object.assign(Document.prototype, DocumentOrShadowRoot);
Object.assign(Document.prototype, ParentNode);
Object.assign(Document.prototype, XPathEvaluatorBase);

class XMLDocument extends Document { }

class ElementCreationOptions {
    static readonly default: ElementCreationOptions = {
        is: ""
    };

    is: string;
}

export default Document;
export { XMLDocument };
export { ElementCreationOptions };
