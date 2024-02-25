import { PiNotePencilLight } from "react-icons/pi";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { usePosContext } from "../../providers/ShopProvider";

const CartItemCard = ({ cartItem }) => {
  const { increaseQuantity, decreaseQuantity, deleteCartItem } =
    usePosContext();

  return (
    <div className="flex items-center gap-2">
      <PiNotePencilLight className="text-xl" />
      <div className="flex-1 border p-2 flex justify-between">
        <p className="md:text-lg text-sm w-1/2">{cartItem.product.title}</p>
        <p className="md:text-lg text-sm flex-1">$ {cartItem.product.price}</p>
        <div className="flex-1 flex items-center gap-3">
          <FaCircleMinus onClick={() => decreaseQuantity(cartItem.id)} />
          <p>{cartItem.quantity}</p>
          <FaCirclePlus onClick={() => increaseQuantity(cartItem.id)} />
        </div>
        <p className="md:text-lg text-sm flex-1 text-end">
          $ {cartItem.product.price * cartItem.quantity}
        </p>
      </div>
      <FaRegTrashCan
        onClick={() => deleteCartItem(cartItem.id)}
        className="cursor-pointer text-error"
      />
    </div>
  );
};

export default CartItemCard;
