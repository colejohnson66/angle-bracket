import XPathResult from "./XPathResult";

/* Implements https://dom.spec.whatwg.org/#xpathexpression
 *
 * [Exposed=Window]
 * interface XPathExpression {
 *   // XPathResult.ANY_TYPE = 0
 *   XPathResult evaluate(Node contextNode, optional unsigned short type = 0, optional XPathResult? result = null);
 * };
 */
class XPathExpression {
    evaluate(contextNode, type = XPathResult.ANY_TYPE, result = null) { }
}

export default XPathExpression;
