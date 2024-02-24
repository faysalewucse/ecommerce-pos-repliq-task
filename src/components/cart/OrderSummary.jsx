import { usePosContext } from "../../providers/ShopProvider";

const OrderSummary = () => {
  const { totalPrice, shippingCharge, tax, discountOnCart } = usePosContext();

  return (
    <div className="flex justify-end">
      <div className="flex-col justify-endt text-sm">
        <hr />
        <OrderSummaryLine label={"Sub Total"} value={`$ ${totalPrice}`} />
        <hr />
        <OrderSummaryLine label={"Tax"} value={`$ ${tax}`} />
        <hr />
        <OrderSummaryLine label={"Shipping"} value={`$ ${shippingCharge}`} />
        <hr />
        <OrderSummaryLine
          label={"Discount on Cart"}
          value={`$ ${discountOnCart}`}
          labelStyle={"text-secondary"}
        />
      </div>
    </div>
  );
};

export default OrderSummary;

const OrderSummaryLine = ({ label, value, labelStyle }) => {
  return (
    <div className="flex gap-10 p-2">
      <p className={`w-40 ${labelStyle}`}>{label}</p>
      <p className="flex-1 text-end font-bold">{value}</p>
    </div>
  );
};
