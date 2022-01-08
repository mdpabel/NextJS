import React from "react";
import { useRouter } from "next/router";

const SearchByDate = () => {
  const router = useRouter();
  const r = router.query.slug?.join("/");

  console.log(r);
  return (
    <div>
      <h1>Filtered products</h1>
      <h4>{r}</h4>
    </div>
  );
};

export default SearchByDate;
