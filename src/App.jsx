import Home from "./pages/Home";
import ShopProvider from "./providers/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <Home />
    </ShopProvider>
  );
}

export default App;
