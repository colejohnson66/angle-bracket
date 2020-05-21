/* Implements https://dom.spec.whatwg.org/#xpathevaluatorbase
 *
 * callback interface XPathNSResolver {
 *   DOMString? lookupNamespaceURI(DOMString? prefix);
 * };
 * 
 * interface mixin XPathEvaluatorBase {
 *   [NewObject] XPathExpression createExpression(DOMString expression, optional XPathNSResolver? resolver = null);
 *   XPathNSResolver createNSResolver(Node nodeResolver);
 *   // XPathResult.ANY_TYPE = 0
 *   XPathResult evaluate(DOMString expression, Node contextNode, optional XPathNSResolver? resolver = null, optional unsigned short type = 0, optional XPathResult? result = null);
 * };
 * Document includes XPathEvaluatorBase;
 */
class XPathNSResolver {
    lookupNamespaceURI(prefix) { }
}

// XPathEvaluatorBase implemented in `./mixin/XPathEvaluatorBase.js`

export default XPathNSResolver;