import { Toaster } from "react-hot-toast";
import CustomLoader from "../components/CustomLoader";
import { usePosContext } from "../providers/ShopProvider";
import Cart from "../screen/Cart";
import Products from "../screen/Products";

const Home = () => {
  const { isLoading } = usePosContext();

  return isLoading ? (
    <CustomLoader />
  ) : (
    <div className="p-2 flex lg:flex-row gap-5 flex-col max-w-[1920px] max-h-[1080px]">
      <div className="flex-1">
        <Cart />
      </div>
      <div className="flex-1">
        <Products />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Home;
