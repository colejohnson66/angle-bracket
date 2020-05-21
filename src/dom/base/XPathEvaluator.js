import XPathEvaluatorBase from "./mixin/XPathEvaluatorBase";

/* Implements https://dom.spec.whatwg.org/#xpathevaluator
 *
 * [Exposed=Window]
 * interface XPathEvaluator {
 *   constructor();
 * };
 *
 * XPathEvaluator includes XPathEvaluatorBase;
 */
class XPathEvaluator {
    constructor() { }
}

Object.assign(XPathEvaluator.prototype, XPathEvaluatorBase);

export default XPathEvaluator;
