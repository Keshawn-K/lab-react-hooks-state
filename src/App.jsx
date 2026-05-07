import { useState } from "react"
import sampleProducts from "./data/products"

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState("All")
  const [cart, setCart] = useState([])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

/* ================= COMPONENTS ================= */

function ProductList({ products, addToCart }) {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <button
              data-testid={`product-${product.id}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  )
}

function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  )
}