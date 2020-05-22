import Attr from "./Attr";
import ChildNode from "./mixin/ChildNode";
import DOMTokenList from "./DOMTokenList";
import HTMLCollection from "./HTMLCollection";
import NamedNodeMap from "./NamedNodeMap";
import Node from "./Node";
import NonDocumentTypeChildNode from "./mixin/NonDocumentTypeChildNode";
import ParentNode from "./mixin/ParentNode";
import ShadowRoot from "./ShadowRoot";
import { ShadowRootMode } from "./ShadowRoot";
import Slottable from "./mixin/Slottable";
import { applyMixins } from "../../applyMixins";

/* https://dom.spec.whatwg.org/#interface-element
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
    get namespaceURI(): string | null { throw ""; }

    get prefix(): string | null { throw ""; }

    get localName(): string { throw ""; }

    get tagName(): string { throw ""; }


    get id(): string { throw ""; }
    set id(value: string) { throw ""; }

    get className(): string { throw ""; }
    set className(value: string) { throw ""; }

    get classList(): DOMTokenList { throw ""; }

    get slot(): string { throw ""; }
    set slot(value: string) { throw ""; }


    hasAttributes(): boolean { throw ""; }

    get attributes(): NamedNodeMap { throw ""; }

    getAttributeNames(): string[] { throw ""; }

    getAttribute(qualifiedName: string): string | null { throw ""; }

    getAttributeNS(namespace: string | null, localName: string): string | null { throw ""; }

    setAttribute(qualifiedName: string, value: string): void { throw ""; }

    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void { throw ""; }

    removeAttribute(qualifiedName: string): void { throw ""; }

    removeAttributeNS(namespace: string | null, localName: string): void { throw ""; }

    toggleAttribute(qualifiedName: string, force?: boolean) { throw ""; }

    hasAttribute(qualifiedName: string): boolean { throw ""; }

    hasAttributeNS(namespace: string | null, localName: string): boolean { throw ""; }


    getAttributeNode(qualifiedName: string): Attr { throw ""; }

    getAttributeNodeNS(namespace: string | null, localName: string): Attr { throw ""; }

    setAttributeNode(attr: Attr): Attr | null { throw ""; }

    setAttributeNodeNS(attr: Attr): Attr | null { throw ""; }

    removeAttributeNode(attr: Attr): Attr { throw ""; }


    attachShadow(init: ShadowRootInit): ShadowRoot { throw ""; }

    get shadowRoot(): ShadowRoot | null { throw ""; }


    closest(selectors: string): Element | null { throw ""; }

    matches(selectors: string): boolean { throw ""; }

    webkitMatchesSelector(selectors: string): boolean { throw ""; } // historical alias of .matches


    getElementsByTagName(qualifiedName: string): HTMLCollection { throw ""; }

    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollection { throw ""; }

    getElementsByClassName(classNames: string): HTMLCollection { throw ""; }


    insertAdjacentElement(where: string, element: Element): Element | null { throw ""; } // historical

    insertAdjacentText(where: string, data: string): void { throw ""; } // historical
}

applyMixins(Element, [
    ChildNode,
    NonDocumentTypeChildNode,
    ParentNode,
    Slottable
]);

class ShadowRootInit {
    static readonly default: ShadowRootInit = {
        mode: undefined,
        delegatesFocus: false
    };

    mode: ShadowRootMode;
    delegatesFocus: boolean
}

export default Element;
export { ShadowRootInit };
