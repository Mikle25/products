import React from "react";
import CreateProduct from "../components/widgets/CreateProduct";
import ProductList from "../components/widgets/ProductList";
import { Stack } from "@chakra-ui/react";

const Products = () => {
  return (
    <Stack spacing="10px" alignItems="center" w="100%">
      <CreateProduct />

      <ProductList />
    </Stack>
  );
};

export default Products;
