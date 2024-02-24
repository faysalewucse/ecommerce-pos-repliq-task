import { PiNotePencilLight } from "react-icons/pi";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItemCard = ({ cartItem }) => {
  return (
    <div className="flex items-center gap-2">
      <PiNotePencilLight />
      <div className="flex-1 border p-2 flex justify-between">
        <p className="w-1/2">{cartItem.title}</p>
        <p>$ {cartItem.price}</p>
        <div className="flex items-center gap-3">
          <FaCircleMinus />
          <p>{cartItem.quantity}</p>
          <FaCirclePlus />
        </div>
        <p>$ {cartItem.price * cartItem.quantity}</p>
      </div>
      <FaRegTrashCan className="text-error" />
    </div>
  );
};

export default CartItemCard;
