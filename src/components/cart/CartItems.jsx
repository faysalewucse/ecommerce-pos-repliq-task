import { usePosContext } from "../../providers/ShopProvider";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";

const CartItems = () => {
  const { cartItems, totalPrice } = usePosContext();

  return (
    <div>
      <div>
        {cartItems.map((cartItem, index) => (
          <CartItemCard key={index} cartItem={cartItem} />
        ))}
      </div>
      <OrderSummary />
      <div className="flex justify-between items-center bg-secondaryBg text-secondary p-3 rounded-md mt-5">
        <div className="text-xs">Products Count ({cartItems.length})</div>
        <div className="flex gap-10">
          <p className="font-bold">Total</p>
          <p className="font-bold">$ {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
