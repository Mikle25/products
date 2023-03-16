import React from "react";
import CreateProduct from "../components/widgets/CreateProduct";
import ProductList from "../components/widgets/ProductList";

const Products = () => {
  return (
    <div className="flex flex-col gap-5">
      <CreateProduct />

      <ProductList />
    </div>
  );
};

export default Products;
