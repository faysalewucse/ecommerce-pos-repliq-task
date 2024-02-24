import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const ShopContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePosContext() {
  return useContext(ShopContext);
}

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products and categories on mount
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setAllProducts(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCategories = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/categories"
        );

        setCategories(["All", ...data]);
        setSelectedCategory("All");
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const filterProductsByCategory = (selectedCategory) => {
    const category = selectedCategory.toLowerCase();

    if (category === "all") {
      setProducts(allProducts);
    } else {
      setProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  // Function to add product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        categories,
        cartItems,
        selectedCategory,
        setSelectedCategory,
        addToCart,
        filterProductsByCategory,
        isLoading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
