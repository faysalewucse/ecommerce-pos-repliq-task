import Cart from "./screen/Cart";
import Products from "./screen/Products";

function App() {
  return (
    <div className="p-2 lg:flex max-w-[1920px] max-h-[1080px]">
      <div className="flex-1">
        <Cart />
      </div>
      <div className="flex-1">
        <Products />
      </div>
    </div>
  );
}

export default App;
