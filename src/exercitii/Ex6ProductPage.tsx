import { products } from "../date";
import type { Product } from "../date";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const inStock = product.stock > 0;

  return (
    <div className="w-full sm:w-[240px] flex flex-col border-2 border-mint rounded-md p-2 min-w-[350px]">
      <img src={product.image} alt={product.name} className="p-8 min-h-[250px] min-w-[250px] shrink-0" />
      <p className="">{product.category}</p>
      <h3 className="font-bold">{product.name}</h3>
      <p className="mb-[25px]">{product.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold">{product.price} lei</span>
        <button disabled={!inStock} className="ml-auto bg-brand text-white p-2 rounded-md">
          {inStock ? "Adaugă în coș" : "Stoc epuizat"}
        </button>
      </div>
    </div>
  );
}

export default function Ex6ProductPage() {
  return (
    <div>
      <header className="flex">
        <span className="">MyShop</span>
        <span className=" ml-auto">Coș (0)</span>
      </header>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
