import { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import Categories from "../components/cart/Categories";
import { usePosContext } from "../providers/ShopProvider";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CategoryCard from "../components/cards/CategoryCard";
import { MdClose } from "react-icons/md";

const Products = () => {
  const { products, categories } = usePosContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Categories openDrawer={toggleDrawer} />
      <div className="mt-3 grid grid-cols-4 gap-5">
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
