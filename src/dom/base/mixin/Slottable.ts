/* https://dom.spec.whatwg.org/#mixin-slotable
 *
 * interface mixin Slottable {
 *   readonly attribute HTMLSlotElement? assignedSlot;
 * };
 * Element includes Slottable;
 * Text includes Slottable;
 */
// TODO: `HTMLSlotElement` is defined in the HTML standard
const Slottable = {
    get assignedSlot() { throw ""; }
};

export default Slottable;
