import { products } from "../date";
import type { Product } from "../date";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const inStock = product.stock > 0;

  return (
    <div className="">
      <img src={product.image} alt={product.name} className="" />
      <p className="">{product.category}</p>
      <h3 className="">{product.name}</h3>
      <p className="">{product.description}</p>
      <div className="">
        <span className="">{product.price} lei</span>
        <button disabled={!inStock} className="">
          {inStock ? "Adaugă în coș" : "Stoc epuizat"}
        </button>
      </div>
    </div>
  );
}

export default function Ex6ProductPage() {
  return (
    <div>
      <header className="">
        <span className="">MyShop</span>
        <span className="">Coș (0)</span>
      </header>
      <div className="">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
