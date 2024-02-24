import ProductCard from "../components/cards/ProductCard";
import Categories from "../components/cart/Categories";
import { usePosContext } from "../providers/ShopProvider";

const Products = () => {
  const { products } = usePosContext();

  return (
    <div>
      <Categories />
      <div className="mt-3 grid grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
