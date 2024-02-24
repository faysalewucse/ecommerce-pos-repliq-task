import { usePosContext } from "../../providers/ShopProvider";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  const { cartItems } = usePosContext();

  return (
    <div>
      {cartItems.map((cartItem, index) => (
        <CartItemCard key={index} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItems;
