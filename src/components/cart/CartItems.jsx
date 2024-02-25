import { MdClose, MdDiscount, MdPause, MdPayment } from "react-icons/md";
import { usePosContext } from "../../providers/ShopProvider";
import IconButton from "../IconButton";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";

const CartItems = () => {
  const { cartItems, totalPrice, setPaymentScreen } = usePosContext();

  return (
    <div>
      <div>
        {cartItems.map((cartItem, index) => (
          <CartItemCard key={index} cartItem={cartItem} />
        ))}
      </div>
      {cartItems.length !== 0 && (
        <div className="mt-5">
          <OrderSummary />
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="flex justify-between items-center bg-secondaryBg text-secondary p-3 rounded-md mt-5">
          <div className="text-xs">Products Count ({cartItems.length})</div>
          <div className="flex gap-10">
            <p className="font-bold">Total</p>
            <p className="font-bold">$ {totalPrice}</p>
          </div>
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="flex gap-2 mt-2">
          <IconButton
            label={"Cancel"}
            icon={<MdClose />}
            labelColor={"text-red-500"}
            bgColor={"bg-red-200"}
          />
          <IconButton label={"Hold"} icon={<MdPause />} />
          <IconButton label={"Discount"} icon={<MdDiscount />} />
          <IconButton
            onClick={() => setPaymentScreen(true)}
            label={"Pay Now"}
            icon={<MdPayment />}
          />
        </div>
      )}
    </div>
  );
};

export default CartItems;
