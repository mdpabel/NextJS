import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const product = {
  computer: [
    {
      id: 1,
      title: "HP",
    },
    {
      id: 2,
      title: "Dell",
    },
    {
      id: 3,
      title: "Lenovo",
    },
  ],

  mobile: [
    {
      id: 1,
      title: "Samsung",
    },
    {
      id: 2,
      title: "Nokia",
    },
  ],

  monitor: [
    {
      id: 1,
      title: "hp monitor",
    },
  ],
};

const Product = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Single Product, {router.query.productId}</h1>

      {product[router.query.productId]?.map((item) => (
        <li key={item.id}>
          <Link href={`/product/computer/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Product;
