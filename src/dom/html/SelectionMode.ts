/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#textFieldSelection
 *
 * enum SelectionMode {
 *   "select",
 *   "start",
 *   "end",
 *   "preserve" // default
 * };
 */
type SelectionMode = "select" | "start" | "end" | "preserve";

export default SelectionMode;
