/* https://dom.spec.whatwg.org/#interface-domtokenlist
 *
 * [Exposed=Window]
 * interface DOMTokenList {
 *   readonly attribute unsigned long length;
 *   getter DOMString? item(unsigned long index);
 *   boolean contains(DOMString token);
 *   [CEReactions] void add(DOMString... tokens);
 *   [CEReactions] void remove(DOMString... tokens);
 *   [CEReactions] boolean toggle(DOMString token, optional boolean force);
 *   [CEReactions] boolean replace(DOMString token, DOMString newToken);
 *   boolean supports(DOMString token);
 *   [CEReactions] stringifier attribute DOMString value;
 *   iterable<DOMString>;
 * };
 */
// NOTE: Can't overload the [] operator for `item`
// TODO: Proxies?
class DOMTokenList {
    get length(): number { throw ""; }

    item(index: number): string | null { throw ""; }

    contains(token: string): boolean { throw ""; }

    add(...tokens: string[]): void { throw ""; }

    remove(...tokens: string[]): void { throw ""; }

    toggle(token: string, force?: boolean): boolean { throw ""; }

    replace(token: string, newToken: string): boolean { throw ""; }

    supports(token: string): boolean { throw ""; }

    get value(): string { throw ""; }

    [Symbol.iterator]() { throw ""; }
}

export default DOMTokenList;
