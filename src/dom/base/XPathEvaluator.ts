import XPathEvaluatorBase from "./mixin/XPathEvaluatorBase";
import { applyMixins } from "../../applyMixins";

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

applyMixins(XPathEvaluator, XPathEvaluatorBase);

export default XPathEvaluator;
