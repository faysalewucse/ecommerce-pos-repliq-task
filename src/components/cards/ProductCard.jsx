import toast from "react-hot-toast";
import { usePosContext } from "../../providers/ShopProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = usePosContext();
  const productAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };
  return (
    <div
      onClick={productAddToCart}
      key={product.id}
      className="cursor-pointer border border-gray-700 text-center rounded"
    >
      <img
        src={product.thumbnail}
        alt={product.id}
        className="object-cover h-40 rounded-t"
      />
      <p className="mb-2 font-semibold bg-[#F4F6F8] py-1">${product.price}</p>
      <hr />
      <p>{product.title}</p>
    </div>
  );
};

export default ProductCard;
