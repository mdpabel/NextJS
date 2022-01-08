import React from "react";
import { useRouter } from "next/router";

const SingleProductList = () => {
  const router = useRouter();

  function backToHomePageHandler() {
    router.push("/");
  }

  return (
    <div>
      <h1>Single product List</h1>
      <button onClick={backToHomePageHandler}>Back to home page</button>
    </div>
  );
};

export default SingleProductList;
