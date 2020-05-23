/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
 *
 * [Exposed=Window]
 * interface ValidityState {
 *   readonly attribute boolean valueMissing;
 *   readonly attribute boolean typeMismatch;
 *   readonly attribute boolean patternMismatch;
 *   readonly attribute boolean tooLong;
 *   readonly attribute boolean tooShort;
 *   readonly attribute boolean rangeUnderflow;
 *   readonly attribute boolean rangeOverflow;
 *   readonly attribute boolean stepMismatch;
 *   readonly attribute boolean badInput;
 *   readonly attribute boolean customError;
 *   readonly attribute boolean valid;
 * };
 */
class ValidityState {
    get valueMissing(): boolean { throw ""; }

    get typeMismatch(): boolean { throw ""; }

    get patternMismatch(): boolean { throw ""; }

    get tooLong(): boolean { throw ""; }

    get tooShort(): boolean { throw ""; }

    get rangeUnderflow(): boolean { throw ""; }

    get rangeOverflow(): boolean { throw ""; }

    get stepMismatch(): boolean { throw ""; }

    get badInput(): boolean { throw ""; }

    get customError(): boolean { throw ""; }

    get valid(): boolean { throw ""; }
}

export default ValidityState;
