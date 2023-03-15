import React, { useEffect } from "react";
import {
  // useDeleteAllMutation,
  // useDeleteProductMutation,
  // useLazyGetProductsQuery,
  useLazyGetProductsWithFilterQuery,
  useUpdateProductMutation,
} from "../../store/supabase/supabase.api";
// import Button from "../ui/Button";
import styled from "styled-components";

const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
`;

const ProductList = () => {
  const [getProducts, { data = [] }] = useLazyGetProductsWithFilterQuery({});
  const [fetchUpdate] = useUpdateProductMutation();
  // const [fetchDelete] = useDeleteProductMutation();
  // const [fetchDeleteAll] = useDeleteAllMutation();

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

  // const handleDelete = async (elem: any) => {
  //   try {
  //     await fetchDelete(elem);
  //     getProducts({});
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  //
  // const handlerDeleteAll = async () => {
  //   const allId = data.map((elem) => elem.id);
  //   if (!allId.length) return;
  //
  //   try {
  //     await fetchDeleteAll(allId);
  //
  //     getProducts({});
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const paste = () => {
    navigator.clipboard.readText().then((e) => console.log(e));
  };

  return (
    <div className="flex self-center w-[100%] flex-col gap-10">
      <ul>
        <Col className="w-[100%] border-b mb-2 p-2">
          <span onClick={paste}>Product</span>
          <span>Status</span>
          <span></span>
        </Col>

        {data?.map((elem) => (
          <Col
            key={elem.id}
            className={`w-[100%] border-b p-2 ${
              elem.checked ? "bg-green-300" : undefined
            }`}
          >
            <span className="uppercase" onClick={() => copy(elem.product)}>
              {elem.product}
            </span>

            <span
              className={`${
                elem.checked ? "text-green-500" : "text-red-600"
              } cursor-pointer`}
              onClick={() => handleChecked(elem.id, elem.checked)}
            >
              {elem.checked ? "V" : "X"}
            </span>

            {/*<span onClick={() => handleDelete(elem)} className="cursor-pointer">*/}
            {/*  x*/}
            {/*</span>*/}
          </Col>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
