/* Implements https://dom.spec.whatwg.org/#callbackdef-nodefilter
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
    static get FILTER_ACCEPT() { return 1; }
    static get FILTER_REJECT() { return 2; }
    static get FILTER_SKIP() { return 3; }

    static get SHOW_ALL() { return 0xFFFFFFFF; }
    static get SHOW_ELEMENT() { return 0x1; }
    static get SHOW_ATTRIBUTE() { return 0x2; }
    static get SHOW_TEXT() { return 0x4; }
    static get SHOW_CDATA_SECTION() { return 0x8; }
    static get SHOW_ENTITY_REFERENCE() { return 0x10; } // historical
    static get SHOW_ENTITY() { return 0x20; } // historical
    static get SHOW_PROCESSING_INSTRUCTION() { return 0x40; }
    static get SHOW_COMMENT() { return 0x80; }
    static get SHOW_DOCUMENT() { return 0x100; }
    static get SHOW_DOCUMENT_TYPE() { return 0x200; }
    static get SHOW_DOCUMENT_FRAGMENT() { return 0x400; }
    static get SHOW_NOTATION() { return 0x800; } // historical

    acceptNode(node) { }
}

export default NodeFilter;
