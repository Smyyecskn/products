import ProductList from "./components/products/ProductsList";
import "./App.scss";
import { categories } from "./helper/data";

function App() {
  return (
    <div>
      <ProductList categories={categories} />
    </div>
  );
}

export default App;
