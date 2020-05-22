import Document, { XMLDocument } from "./Document";

import DocumentType from "./DocumentType";

/* https://dom.spec.whatwg.org/#interface-domimplementation
 *
 * [Exposed=Window]
 * interface DOMImplementation {
 *   [NewObject] DocumentType createDocumentType(DOMString qualifiedName, DOMString publicId, DOMString systemId);
 *   [NewObject] XMLDocument createDocument(DOMString? namespace, [LegacyNullToEmptyString] DOMString qualifiedName, optional DocumentType? doctype = null);
 *   [NewObject] Document createHTMLDocument(optional DOMString title);
 *
 *   boolean hasFeature(); // useless; always returns true
 * };
 */
class DOMImplementation {
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType { throw ""; }

    createDocument(namespace: string | null, qualifiedName: string, doctype: DocumentType | null = null): XMLDocument { throw ""; }

    createHTMLDocument(title?: string): Document { throw ""; }


    hasFeature(): boolean { return true; }
}

export default DOMImplementation;
