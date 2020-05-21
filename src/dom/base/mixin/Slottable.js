/* Implements https://dom.spec.whatwg.org/#mixin-slotable
 *
 * interface mixin Slottable {
 *   readonly attribute HTMLSlotElement? assignedSlot;
 * };
 * Element includes Slottable;
 * Text includes Slottable;
 */
const Slottable = {
    get assignedSlot() { }
};

export default Slottable;
