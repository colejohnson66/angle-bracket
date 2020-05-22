import AbstractRange from "./AbstractRange";
import DocumentFragment from "./DocumentFragment";
import Node from "./Node";

/* https://dom.spec.whatwg.org/#interface-range
 *
 * [Exposed=Window]
 * interface Range : AbstractRange {
 *   constructor();
 *
 *   readonly attribute Node commonAncestorContainer;
 *
 *   void setStart(Node node, unsigned long offset);
 *   void setEnd(Node node, unsigned long offset);
 *   void setStartBefore(Node node);
 *   void setStartAfter(Node node);
 *   void setEndBefore(Node node);
 *   void setEndAfter(Node node);
 *   void collapse(optional boolean toStart = false);
 *   void selectNode(Node node);
 *   void selectNodeContents(Node node);
 *
 *   const unsigned short START_TO_START = 0;
 *   const unsigned short START_TO_END = 1;
 *   const unsigned short END_TO_END = 2;
 *   const unsigned short END_TO_START = 3;
 *   short compareBoundaryPoints(unsigned short how, Range sourceRange);
 *
 *   [CEReactions] void deleteContents();
 *   [CEReactions, NewObject] DocumentFragment extractContents();
 *   [CEReactions, NewObject] DocumentFragment cloneContents();
 *   [CEReactions] void insertNode(Node node);
 *   [CEReactions] void surroundContents(Node newParent);
 *
 *   [NewObject] Range cloneRange();
 *   void detach();
 *
 *   boolean isPointInRange(Node node, unsigned long offset);
 *   short comparePoint(Node node, unsigned long offset);
 *
 *   boolean intersectsNode(Node node);
 *
 *   stringifier;
 * };
 */
class Range extends AbstractRange {
    constructor() {
        super();
        throw "";
    }


    get commonAncestorContainer(): Node { throw ""; }


    setStart(node: Node, offset: number): void { throw ""; }

    setEnd(node: Node, offset: number): void { throw ""; }

    setStartBefore(node: Node): void { throw ""; }

    setStartAfter(node: Node): void { throw ""; }

    setEndBefore(node: Node): void { throw ""; }

    setEndAfter(node: Node): void { throw ""; }

    collapse(toStart: boolean = false): void { throw ""; }

    selectNode(node: Node): void { throw ""; }

    selectNodeContents(node: Node): void { throw ""; }


    static readonly START_TO_START = 0;
    static readonly START_TO_END = 1;
    static readonly END_TO_END = 2;
    static readonly END_TO_START = 3;

    compareBoundaryPoints(how: number, sourceRange: Range) { throw ""; }



    deleteContents(): void { throw ""; }

    extractContents(): DocumentFragment { throw ""; }

    cloneContents(): DocumentFragment { throw ""; }

    insertNode(node: Node): void { throw ""; }

    surroundContents(newParent: Node): void { throw ""; }


    cloneRange(): Range { throw ""; }

    detach(): void { throw ""; }


    isPointInRange(node: Node, offset: number): boolean { throw ""; }

    comparePoint(node: Node, offset: number): number { throw ""; }


    intersectsNode(node: Node): boolean { throw ""; }


    toString(): string { throw ""; }
}

export default Range;
