import React from "react";
import Link from "next/link";

const products = [
  { id: 1, title: "Computer", slug: "computer" },
  { id: 2, title: "Mobile", slug: "mobile" },
  { id: 3, title: "Monitor", slug: "monitor" },
];

const Product = () => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.slug}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
