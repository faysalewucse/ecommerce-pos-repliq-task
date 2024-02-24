import CartItems from "../components/cart/CartItems";
import Customer from "../components/cart/Customer";
import CartNavbar from "./CartNavbar";

const Cart = () => {
  return (
    <div>
      <CartNavbar />
      <Customer />
      <CartItems />
    </div>
  );
};

export default Cart;
