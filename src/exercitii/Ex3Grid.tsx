import { products } from "../date";

export default function Ex3Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-[#0F172A] rounded-md p-2">
        <p className="text-[#898988] font-bold">Black Friday</p>
        <p className="text-[#FAF9F6] font-bold">-20% la periferice</p>
      </div>
      {products.map((product) => (
        <div key={product.id} className="border-1 border-gray-200 rounded-md p-2">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-[#646361]">{product.category}</p>
          <p className="font-bold">{product.price} lei</p>
        </div>
      ))}
    </div>
  );
}
