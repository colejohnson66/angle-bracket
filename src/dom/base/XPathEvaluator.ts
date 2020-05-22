import XPathEvaluatorBase from "./mixin/XPathEvaluatorBase";

/* https://dom.spec.whatwg.org/#interface-xpathevaluator
 *
 * [Exposed=Window]
 * interface XPathEvaluator {
 *   constructor();
 * };
 *
 * XPathEvaluator includes XPathEvaluatorBase;
 */
class XPathEvaluator {
    constructor() { throw ""; }
}

Object.assign(XPathEvaluator.prototype, XPathEvaluatorBase);

export default XPathEvaluator;
