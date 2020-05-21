import ChildNode from "./mixin/ChildNode";
import Node from "./Node";
import NonDocumentTypeChildNode from "./mixin/NonDocumentTypeChildNode";
import ParentNode from "./mixin/ParentNode";
import Slottable from "./mixin/Slottable";

/* Implements https://dom.spec.whatwg.org/#interface-element
 *
 * [Exposed=Window]
 * interface Element : Node {
 *   readonly attribute DOMString? namespaceURI;
 *   readonly attribute DOMString? prefix;
 *   readonly attribute DOMString localName;
 *   readonly attribute DOMString tagName;
 *
 *   [CEReactions] attribute DOMString id;
 *   [CEReactions] attribute DOMString className;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList classList;
 *   [CEReactions, Unscopable] attribute DOMString slot;
 *
 *   boolean hasAttributes();
 *   [SameObject] readonly attribute NamedNodeMap attributes;
 *   sequence<DOMString> getAttributeNames();
 *   DOMString? getAttribute(DOMString qualifiedName);
 *   DOMString? getAttributeNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] void setAttribute(DOMString qualifiedName, DOMString value);
 *   [CEReactions] void setAttributeNS(DOMString? namespace, DOMString qualifiedName, DOMString value);
 *   [CEReactions] void removeAttribute(DOMString qualifiedName);
 *   [CEReactions] void removeAttributeNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] boolean toggleAttribute(DOMString qualifiedName, optional boolean force);
 *   boolean hasAttribute(DOMString qualifiedName);
 *   boolean hasAttributeNS(DOMString? namespace, DOMString localName);
 *
 *   Attr? getAttributeNode(DOMString qualifiedName);
 *   Attr? getAttributeNodeNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] Attr? setAttributeNode(Attr attr);
 *   [CEReactions] Attr? setAttributeNodeNS(Attr attr);
 *   [CEReactions] Attr removeAttributeNode(Attr attr);
 *
 *   ShadowRoot attachShadow(ShadowRootInit init);
 *   readonly attribute ShadowRoot? shadowRoot;
 *
 *   Element? closest(DOMString selectors);
 *   boolean matches(DOMString selectors);
 *   boolean webkitMatchesSelector(DOMString selectors); // historical alias of .matches
 * 
 *   HTMLCollection getElementsByTagName(DOMString qualifiedName);
 *   HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
 *   HTMLCollection getElementsByClassName(DOMString classNames);
 * 
 *   [CEReactions] Element? insertAdjacentElement(DOMString where, Element element); // historical
 *   void insertAdjacentText(DOMString where, DOMString data); // historical
 * };
 *
 * dictionary ShadowRootInit {
 *   required ShadowRootMode mode;
 *   boolean delegatesFocus = false;
 * };
 */
class Element extends Node {
    get namespaceURI() { }
    get prefix() { }
    get localName() { }
    get tagName() { }

    get id() { }
    set id(value) { }
    get className() { }
    set className(value) { }
    get classList() { }
    get slot() { }
    set slot(value) { }

    hasAttributes() { }
    get attributes() { }
    getAttributeNames() { }
    getAttribute(qualifiedName) { }
    getAttributeNS(namespace, localName) { }
    setAttribute(qualifiedName, value) { }
    setAttributeNS(namespace, qualifiedName, value) { }
    removeAttribute(qualifiedName) { }
    removeAttributeNS(namespace, localName) { }
    toggleAttribute(qualifiedName, force) { }
    hasAttribute(qualifiedName) { }
    hasAttributeNS(namespace, localName) { }

    getAttributeNode(qualifiedName) { }
    getAttributeNodeNS(namespace, localName) { }
    setAttributeNode(attr) { }
    setAttributeNodeNS(attr) { }
    removeAttributeNode(attr) { }

    attachShadow(init) { }
    get shadowRoot() { }

    closest(selectors) { }
    matches(selectors) { }
    webkitMatchesSelector(selectors) { } // historical alias of .matches

    getElementsByTagName(qualifiedName) { }
    getElementsByTagNameNS(namespace, localName) { }
    getElementsByClassName(classNames) { }

    insertAdjacentElement(where, element) { } // historical
    insertAdjacentText(where, data) { } // historical
}

Object.assign(Element.prototype, ChildNode);
Object.assign(Element.prototype, NonDocumentTypeChildNode);
Object.assign(Element.prototype, ParentNode);
Object.assign(Element.prototype, Slottable);

export default Element;
