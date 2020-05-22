import Document from "./Document";
import Element from "./Element";
import EventTarget from "./EventTarget";
import NodeList from "./NodeList";

/* https://dom.spec.whatwg.org/#interface-node
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
class Node extends EventTarget {
    static readonly ELEMENT_NODE = 1;
    static readonly ATTRIBUTE_NODE = 2;
    static readonly TEXT_NODE = 3;
    static readonly CDATA_SECTION_NODE = 4;
    static readonly ENTITY_REFERENCE_NODE = 5; // historical
    static readonly ENTITY_NODE = 6; // historical
    static readonly PROCESSING_INSTRUCTION_NODE = 7;
    static readonly COMMENT_NODE = 8;
    static readonly DOCUMENT_NODE = 9;
    static readonly DOCUMENT_TYPE_NODE = 10;
    static readonly DOCUMENT_FRAGMENT_NODE = 11;
    static readonly NOTATION_NODE = 12; // historical

    get nodeType(): number { throw ""; }

    get nodeName(): string { throw ""; }


    get baseURI(): string { throw ""; }


    get isConnected(): boolean { throw ""; }

    get ownerDocument(): Document | null { throw ""; }

    getRootNode(options: GetRootNodeOptions = GetRootNodeOptions.default): Node { throw ""; }

    get parentNode(): Node | null { throw ""; }

    get parentElement(): Element | null { throw ""; }

    hasChildNodes(): boolean { throw ""; }

    get childNodes(): NodeList { throw ""; }

    get firstChild(): Node | null { throw ""; }

    get lastChild(): Node | null { throw ""; }

    get previousSibling(): Node | null { throw ""; }

    get nextSibling(): Node | null { throw ""; }


    get nodeValue(): string | null { throw ""; }

    set nodeValue(value: string | null) { throw ""; }

    get textContent(): string | null { throw ""; }

    set textContent(value: string | null) { throw ""; }

    normalize(): void { }


    cloneNode(deep: boolean = false): Node { throw ""; }

    isEqualNode(otherNode: Node | null): boolean { throw ""; }

    isSameNode(otherNode: Node | null): boolean { throw ""; }


    static readonly DOCUMENT_POSITION_DISCONNECTED = 0x01;
    static readonly DOCUMENT_POSITION_PRECEDING = 0x02;
    static readonly DOCUMENT_POSITION_FOLLOWING = 0x04;
    static readonly DOCUMENT_POSITION_CONTAINS = 0x08;
    static readonly DOCUMENT_POSITION_CONTAINED_BY = 0x10;
    static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;

    compareDocumentPosition(other: Node): number { throw ""; }

    contains(other: Node | null): boolean { throw ""; }


    lookupPrefix(namespace: string | null): string | null { throw ""; }

    lookupNamespaceURI(prefix: string | null): string | null { throw ""; }

    isDefaultNamespace(namespace: string | null): boolean { throw ""; }


    insertBefore(node: Node, child: Node | null): Node { throw ""; }

    appendChild(node: Node): Node { throw ""; }

    replaceChild(node: Node, child: Node | null): Node { throw ""; }

    removeChild(child: Node): Node { throw ""; }
}

class GetRootNodeOptions {
    static readonly default: GetRootNodeOptions = {
        composed: false
    };

    composed: boolean;
}

export default Node;
export { GetRootNodeOptions };
