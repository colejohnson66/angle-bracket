/* Implements https://dom.spec.whatwg.org/#domimplementation
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
    createDocumentType(qualifiedName, publicId, systemId) { }
    createDocument(namespace, qualifiedName, doctype = null) { }
    createHTMLDocument(title) { }

    hasFeature() { return true; }
}

export default DOMImplementation;
