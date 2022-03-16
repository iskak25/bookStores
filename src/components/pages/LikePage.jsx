import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import Like from "../Like/Like";
// import Like from "../Like";

const LikePage = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {products.map((item) => (
        <Like item={item} key={item.id} />
      ))}
    </div>
  );
};

export default LikePage;
