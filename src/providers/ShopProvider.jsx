/* eslint-disable react-hooks/exhaustive-deps */
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentScreen, setPaymentScreen] = useState(false);
  const shippingCharge = 5.5;
  const tax = 25.5;
  const discountOnCart = 10;

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
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { id: cartItems.length + 1, product, quantity: 1 },
      ]);
    }
  };

  // Handle quantity increase
  const increaseQuantity = (cartItemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Handle quantity decrease
  const decreaseQuantity = (cartItemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === cartItemId
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item, quantity: 1 } // Prevent negative quantity
        : item
    );
    setCartItems(updatedItems);
  };

  // Handle cart item deletion
  const deleteCartItem = (cartItemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== cartItemId);
    setCartItems(updatedItems);
  };

  useEffect(() => {
    let calculatedTotalPrice = 0;

    if (cartItems.length > 0) {
      calculatedTotalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.product.price);
        return acc + price * item.quantity;
      }, 0);
    }

    setTotalPrice(calculatedTotalPrice + tax + shippingCharge - discountOnCart);
  }, [cartItems]);

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
        increaseQuantity,
        decreaseQuantity,
        deleteCartItem,
        totalPrice,
        shippingCharge,
        tax,
        discountOnCart,
        paymentScreen,
        setPaymentScreen,
        isLoading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
