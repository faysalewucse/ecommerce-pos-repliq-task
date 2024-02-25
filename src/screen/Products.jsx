import { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import Categories from "../components/cart/Categories";
import { usePosContext } from "../providers/ShopProvider";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CategoryCard from "../components/cards/CategoryCard";
import { MdClose, MdSearch } from "react-icons/md";
import barCodeImage from "/barcode.png";
import PaymentForm from "./PaymentForm";

const Products = () => {
  const { products, categories, paymentScreen } = usePosContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return paymentScreen ? (
    <PaymentForm />
  ) : (
    <div>
      <div className="relative">
        <MdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl" />
        <input
          type="text"
          className="bg-greyBg/5 shadow w-full py-5 pl-10 focus:outline-none"
          placeholder="Search Product By Name"
        />
        <img
          src={barCodeImage}
          alt="barcode"
          className="w-20 absolute right-0 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <Categories openDrawer={toggleDrawer} />
      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
        size={600}
      >
        <div className="p-5">
          <MdClose
            className="absolute right-8 text-3xl"
            onClick={toggleDrawer}
          />
          <h4 className="text-center font-semibold mb-5">Categories</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Products;
