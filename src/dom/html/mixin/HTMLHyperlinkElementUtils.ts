/* https://html.spec.whatwg.org/multipage/links.html#api-for-a-and-area-elements
 *
 * interface mixin HTMLHyperlinkElementUtils {
 *   [CEReactions] stringifier attribute USVString href;
 *   readonly attribute USVString origin;
 *   [CEReactions] attribute USVString protocol;
 *   [CEReactions] attribute USVString username;
 *   [CEReactions] attribute USVString password;
 *   [CEReactions] attribute USVString host;
 *   [CEReactions] attribute USVString hostname;
 *   [CEReactions] attribute USVString port;
 *   [CEReactions] attribute USVString pathname;
 *   [CEReactions] attribute USVString search;
 *   [CEReactions] attribute USVString hash;
 * };
 */
class HTMLHyperlinkElementUtils {
    get href(): string { throw ""; }
    set href(value: string) { throw ""; }

    get origin(): string { throw ""; }

    get protocol(): string { throw ""; }
    set protocol(value: string) { throw ""; }

    get username(): string { throw ""; }
    set username(value: string) { throw ""; }

    get password(): string { throw ""; }
    set password(value: string) { throw ""; }

    get host(): string { throw ""; }
    set host(value: string) { throw ""; }

    get hostname(): string { throw ""; }
    set hostname(value: string) { throw ""; }

    get port(): string { throw ""; }
    set port(value: string) { throw ""; }

    get pathname(): string { throw ""; }
    set pathname(value: string) { throw ""; }

    get search(): string { throw ""; }
    set search(value: string) { throw ""; }

    get hash(): string { throw ""; }
    set hash(value: string) { throw ""; }
}

export default HTMLHyperlinkElementUtils;
