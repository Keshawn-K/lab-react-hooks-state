import sampleProducts from "../data/products"

export { sampleProducts }

export default function ProductList({ products, addToCart }) {
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