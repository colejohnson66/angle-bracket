import Node from "../Node";

/* https://dom.spec.whatwg.org/#interface-childnode
 *
 * interface mixin ChildNode {
 *   [CEReactions, Unscopable] void before((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void after((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void replaceWith((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void remove();
 * };
 * DocumentType includes ChildNode;
 * Element includes ChildNode;
 * CharacterData includes ChildNode;
 */
class ChildNode {
    before(...nodes: Node[] | string[]): void { throw ""; }

    after(...nodes: Node[] | string[]): void { throw ""; }

    replaceWith(...nodes: Node[] | string[]): void { throw ""; }

    remove(): void { throw ""; }
}

export default ChildNode;
