import { useState } from "react";
import { usePosContext } from "../providers/ShopProvider";
import { MdOutlineClose } from "react-icons/md";
import IconButton from "../components/IconButton";

const PaymentForm = () => {
  const { totalPrice, setPaymentScreen } = usePosContext();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Card");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", new FormData(event.target));
  };

  const PaymentMethod = ({ label }) => {
    return (
      <p
        onClick={() => setSelectedPaymentMethod(label)}
        className={`${
          selectedPaymentMethod === label
            ? "bg-primaryBg text-primary"
            : "text-gray-700"
        } md:p-3 flex items-center justify-center cursor-pointer hover:bg-primaryBg hover:text-primary md:text-lg text-sm transition-300 flex-1`}
      >
        {label}
      </p>
    );
  };

  return (
    <div>
      <div className="flex justify-between border-2 p-5 font-semibold">
        <p>Order Ammount</p>
        <p>$ {totalPrice}</p>
      </div>
      <div className="border-2 md:mt-5 md:flex">
        <div className="md:w-32 flex flex-row md:flex-col md:border-r-2 border-b-2">
          <PaymentMethod label={"Cash"} />
          <PaymentMethod label={"Card"} />
          <PaymentMethod label={"On Account"} />
          <PaymentMethod label={"Check"} />
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-10 md:px-20 md:py-10 py-5 rounded shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="cardName"
                className="block text-sm font-bold mb-2"
              >
                Card Name
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-bold mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
                minLength={16}
                maxLength={16}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardExpiryDate"
                className="block text-sm font-bold mb-2"
              >
                Card Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                id="cardExpiryDate"
                name="cardExpiryDate"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
                pattern="^\d{2}/\d{2}$"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardSecret"
                className="block text-sm font-bold mb-2"
              >
                Card Secret
              </label>
              <input
                type="password"
                id="cardSecret"
                name="cardSecret"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
                minLength={3}
              />
            </div>
            <div className="flex gap-5 justify-end">
              <div className="w-28">
                <IconButton
                  onClick={() => setPaymentScreen(false)}
                  labelColor={"text-red-500"}
                  bgColor={"bg-red-200"}
                  type="submit"
                  label={"Cancel"}
                  icon={<MdOutlineClose />}
                />
              </div>
              <IconButton
                labelColor={"text-white"}
                bgColor={"bg-blue-400"}
                type="submit"
                label={"Complete Payment"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
