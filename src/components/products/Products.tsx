"use client";

import { Product } from "./Product";

interface Props {
  products: IProduct[];
}

export const Products = ({ products }: Props) => {
  return (
    <div
      className="grid w-full gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     2xl:grid-cols-5 3xl:grid-cols-5 4xl:grid-cols-6"
    >
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </div>
  );
};
