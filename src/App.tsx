import { ProductCard } from "./components/ProductCard"

function App() {
  return (
    <div>
      <h1>My E-commerce store</h1>
      <p>Welcome to my store</p>
      <ProductCard name="Headphone" price={99} />
      <ProductCard name="Cloth" price={89} />
    </div>
  )
}
export default App