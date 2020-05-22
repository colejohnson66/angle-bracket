import Node from "./Node";
import XPathResult from "./XPathResult";

/* https://dom.spec.whatwg.org/#interface-xpathexpression
 *
 * [Exposed=Window]
 * interface XPathExpression {
 *   // XPathResult.ANY_TYPE = 0
 *   XPathResult evaluate(Node contextNode, optional unsigned short type = 0, optional XPathResult? result = null);
 * };
 */
class XPathExpression {
    evaluate(contextNode: Node, type: number = XPathResult.ANY_TYPE, result: XPathResult | null = null): XPathResult { throw ""; }
}

export default XPathExpression;
