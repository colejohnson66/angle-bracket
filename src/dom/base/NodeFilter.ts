import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-nodefilter
 *
 * callback interface NodeFilter {
 *   // Constants for acceptNode()
 *   const unsigned short FILTER_ACCEPT = 1;
 *   const unsigned short FILTER_REJECT = 2;
 *   const unsigned short FILTER_SKIP = 3;
 *
 *   // Constants for whatToShow
 *   const unsigned long SHOW_ALL = 0xFFFFFFFF;
 *   const unsigned long SHOW_ELEMENT = 0x1;
 *   const unsigned long SHOW_ATTRIBUTE = 0x2;
 *   const unsigned long SHOW_TEXT = 0x4;
 *   const unsigned long SHOW_CDATA_SECTION = 0x8;
 *   const unsigned long SHOW_ENTITY_REFERENCE = 0x10; // historical
 *   const unsigned long SHOW_ENTITY = 0x20; // historical
 *   const unsigned long SHOW_PROCESSING_INSTRUCTION = 0x40;
 *   const unsigned long SHOW_COMMENT = 0x80;
 *   const unsigned long SHOW_DOCUMENT = 0x100;
 *   const unsigned long SHOW_DOCUMENT_TYPE = 0x200;
 *   const unsigned long SHOW_DOCUMENT_FRAGMENT = 0x400;
 *   const unsigned long SHOW_NOTATION = 0x800; // historical
 *
 *   unsigned short acceptNode(Node node);
 * };
 */
class NodeFilter {
    static readonly FILTER_ACCEPT = 1;
    static readonly FILTER_REJECT = 2;
    static readonly FILTER_SKIP = 3;

    static readonly SHOW_ALL = 0xFFFFFFFF;
    static readonly SHOW_ELEMENT = 0x1;
    static readonly SHOW_ATTRIBUTE = 0x2;
    static readonly SHOW_TEXT = 0x4;
    static readonly SHOW_CDATA_SECTION = 0x8;
    static readonly SHOW_ENTITY_REFERENCE = 0x10; // historical
    static readonly SHOW_ENTITY = 0x20; // historical
    static readonly SHOW_PROCESSING_INSTRUCTION = 0x40;
    static readonly SHOW_COMMENT = 0x80;
    static readonly SHOW_DOCUMENT = 0x100;
    static readonly SHOW_DOCUMENT_TYPE = 0x200;
    static readonly SHOW_DOCUMENT_FRAGMENT = 0x400;
    static readonly SHOW_NOTATION = 0x800; // historical

    acceptNode(node: Node): number { throw ""; }
}

export default NodeFilter;
