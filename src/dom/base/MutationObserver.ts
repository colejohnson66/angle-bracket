import MutationRecord from "./MutationRecord";
import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-mutationobserver
 *
 * [Exposed=Window]
 * interface MutationObserver {
 *   constructor(MutationCallback callback);
 *
 *   void observe(Node target, optional MutationObserverInit options = {});
 *   void disconnect();
 *   sequence<MutationRecord> takeRecords();
 * };
 *
 * callback MutationCallback = void (sequence<MutationRecord> mutations, MutationObserver observer);
 *
 * dictionary MutationObserverInit {
 *   boolean childList = false;
 *   boolean attributes;
 *   boolean characterData;
 *   boolean subtree = false;
 *   boolean attributeOldValue;
 *   boolean characterDataOldValue;
 *   sequence<DOMString> attributeFilter;
 * };
 */
class MutationObserver {
    constructor(callback: MutationCallback) { throw ""; }


    observe(target: Node, options: MutationObserverInit = MutationObserverInit.default): void { throw ""; }

    disconnect(): void { throw ""; }

    takeRecords(): MutationRecord[] { throw ""; }
}

type MutationCallback = (mutations: MutationRecord[], observer: MutationObserver) => void;

class MutationObserverInit {
    static readonly default: MutationObserverInit = {
        childList: false,
        attributes: undefined,
        characterData: undefined,
        subtree: false,
        attributeOldValue: undefined,
        characterDataOldValue: undefined,
        attributeFilter: undefined
    };

    childList: boolean;
    attributes: boolean;
    characterData: boolean;
    subtree: boolean;
    attributeOldValue: boolean;
    characterDataOldValue: boolean;
    attributeFilter: string[]
}

export default MutationObserver;
export { MutationCallback };
export { MutationObserverInit };
