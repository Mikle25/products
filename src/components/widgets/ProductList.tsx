import React, { useEffect } from "react";
import {
  useLazyGetProductsWithFilterQuery,
  useUpdateProductMutation,
} from "../../store/supabase/supabase.api";
import { Col } from "../styles/Col";
import { Product } from "./Product";

const ProductList = () => {
  const [getProducts, { data = [] }] = useLazyGetProductsWithFilterQuery({});
  const [fetchUpdate] = useUpdateProductMutation();

  useEffect(() => {
    getProducts({});

    const getProduct = setInterval(() => {
      getProducts({});
    }, 30000);

    return () => clearInterval(getProduct);
  }, []);

  const handleChecked = async (id: number, check: boolean) => {
    try {
      await fetchUpdate({ id, checked: !check });
      getProducts({});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex self-center w-[100%] flex-col gap-10">
      <ul>
        <Col className="w-[100%] border-b mb-2 p-2">
          <span>Product</span>
          <span>Status</span>
          <span></span>
        </Col>

        {data?.map((elem) => (
          <Product key={elem.id} elem={elem} handleChecked={handleChecked} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
