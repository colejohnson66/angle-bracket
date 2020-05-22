import Node from "../Node";
import XPathExpression from "../XPathExpression";
import XPathResult from "../XPathResult";

/* https://dom.spec.whatwg.org/#mixin-xpathevaluatorbase
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
interface XPathNSResolver {
    lookupNamespaceURI(prefix: string | null): string | null;
}

class XPathEvaluatorBase {
    createExpression(expression: string, resolver: XPathNSResolver | null): XPathExpression { throw ""; }

    createNSResolver(nodeResolver: Node): XPathNSResolver { throw ""; }

    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | null = null, type: number = XPathResult.ANY_TYPE, result: XPathResult | null = null): XPathResult { throw ""; }
}

// XPathNSResolver implemented in `../XPathNSResolver.js`

export { XPathNSResolver };
export default XPathEvaluatorBase;
