// Implements WHATWG Infra 4.5: Code points
// As dated 17 May 2020
// https://infra.spec.whatwg.org/commit-snapshots/88fa454edf153e87db1747f8da89cd7f00f6d552/

// A surrogate is a code point that is in the range U+D800 to U+DFFF,
//   inclusive.
export function isSurrogate(c) {
    return c >= 0xD800 && c <= 0xDFFF;
}

// A scalar value is a code point that is not a surrogate.
export function isScalar(c) {
    return !isSurrogate(c);
}

// A noncharacter is a code point that is in the range U+FDD0 to U+FDEF,
//   inclusive, or U+FFFE, U+FFFF, U+1FFFE, U+1FFFF, U+2FFFE, U+2FFFF, U+3FFFE,
//   U+3FFFF, U+4FFFE, U+4FFFF, U+5FFFE, U+5FFFF, U+6FFFE, U+6FFFF, U+7FFFE,
//   U+7FFFF, U+8FFFE, U+8FFFF, U+9FFFE, U+9FFFF, U+AFFFE, U+AFFFF, U+BFFFE,
//   U+BFFFF, U+CFFFE, U+CFFFF, U+DFFFE, U+DFFFF, U+EFFFE, U+EFFFF, U+FFFFE,
//   U+FFFFF, U+10FFFE, or U+10FFFF.
export function isNoncharacter(c) {
    return (c >= 0xFDD0 && c <= 0xFDEF) || c === 0xFFFE || c === 0xFFFF ||
        c === 0x1FFFE || c === 0x1FFFF || c === 0x2FFFE || c === 0x2FFFF ||
        c === 0x3FFFE || c === 0x3FFFF || c === 0x4FFFE || c === 0x4FFFF ||
        c === 0x5FFFE || c === 0x5FFFF || c === 0x6FFFE || c === 0x6FFFF ||
        c === 0x7FFFE || c === 0x7FFFF || c === 0x8FFFE || c === 0x8FFFF ||
        c === 0x9FFFE || c === 0x9FFFF || c === 0x10FFFE || c === 0x10FFFF;
}

// An ASCII code point is a code point in the range U+0000 NULL to
//   U+007F DELETE, inclusive
export function isAsciiCodePoint(c) {
    return c >= 0 && c <= 0x7F;
}

// An ASCII tab or newline is U+0009 TAB, U+000A LF, or U+000D CR.
export function isAsciiTabOrNewline(c) {
    return c == 9 || c == 0xA || c == 0xD;
}

// ASCII whitespace is U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, or
//   U+0020 SPACE.
export function isAsciiWhitespace(c) {
    return c == 9 || c == 0xA || c == 0xC || c == 0xD || c == 0x20;
}

// A C0 control is a code point in the range U+0000 NULL to
//   U+001F INFORMATION SEPARATOR ONE, inclusive.
export function isC0Control(c) {
    return c >= 0 && c <= 0x1F;
}

// A C0 control or space is a C0 control or U+0020 SPACE.
export function isC0ControlOrSpace(c) {
    return isC0Control(c) || c == 0x20;
}

// A control is a C0 control or a code point in the range U+007F DELETE
//   to U+009F APPLICATION PROGRAM COMMAND, inclusive.
export function isControl(c) {
    return isC0Control(c) || (c >= 0x7F && c <= 0x9F);
}

// An ASCII digit is a code point in the range U+0030 (0) to U+0039 (9),
//   inclusive.
export function isAsciiDigit(c) {
    return c >= 0x30 && c <= 0x39;
}

// An ASCII upper hex digit is an ASCII digit or a code point in the range
//   U+0041 (A) to U+0046 (F), inclusive.
export function isAsciiUpperHexDigit(c) {
    return c >= 0x41 && c <= 0x46;
}

// An ASCII lower hex digit is an ASCII digit or a code point in the range
//   U+0061 (a) to U+0066 (f), inclusive.
export function isAsciiLowerHexDigit(c) {
    return c >= 0x61 && c <= 0x66;
}

// An ASCII hex digit is an ASCII upper hex digit or ASCII lower hex digit.
export function isAsciiHexDigit(c) {
    return isAsciiUpperHexDigit(c) || isAsciiLowerHexDigit(c);
}

// An ASCII upper alpha is a code point in the range U+0041 (A) to U+005A (Z),
//   inclusive.
export function isAsciiUpperAlpha(c) {
    return c >= 0x41 && c <= 0x5A;
}

// An ASCII lower alpha is a code point in the range U+0061 (a) to U+007A (z),
//   inclusive.
export function isAsciiLowerAlpha(c) {
    return c >= 0x61 && c <= 0x7A;
}

// An ASCII alpha is an ASCII upper alpha or ASCII lower alpha.
export function isAsciiAlpha(c) {
    return isAsciiUpperAlpha(c) || isAsciiLowerAlpha(c);
}

// An ASCII alphanumeric is an ASCII digit or ASCII alpha.
export function isAsciiAlphanumeric(c) {
    return isAsciiDigit(c) || isAsciiAlpha(c);
}

export default {
    isSurrogate,
    isScalar,
    isNoncharacter,
    isAsciiCodePoint,
    isAsciiTabOrNewline,
    isAsciiWhitespace,
    isC0Control,
    isC0ControlOrSpace,
    isControl,
    isAsciiDigit,
    isAsciiUpperHexDigit,
    isAsciiLowerHexDigit,
    isAsciiHexDigit,
    isAsciiUpperAlpha,
    isAsciiLowerAlpha,
    isAsciiAlpha,
    isAsciiAlphanumeric
};
