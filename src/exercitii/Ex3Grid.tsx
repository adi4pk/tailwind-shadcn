import { products } from "../date";

export default function Ex3Grid() {
  return (
    <div className="">
      <div className="">
        <p className="">Black Friday</p>
        <p className="">-20% la periferice</p>
      </div>
      {products.map((product) => (
        <div key={product.id} className="">
          <h3 className="">{product.name}</h3>
          <p className="">{product.category}</p>
          <p className="">{product.price} lei</p>
        </div>
      ))}
    </div>
  );
}
