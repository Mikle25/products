import React, { useCallback, useEffect, useState } from "react";
import {
  useDeleteAllMutation,
  useLazyGetProductsQuery,
  useUpdateProductMutation,
} from "../../store/supabase/supabase.api";
import { Col } from "../styles/Col";
import { Product } from "./Product";
import Button from "../ui/Button";
import { IProduct } from "../../modules";

const ProductList = () => {
  const [fetchDeleteAll] = useDeleteAllMutation();
  const [getProducts, { data = [] }] = useLazyGetProductsQuery({});
  const [fetchUpdate] = useUpdateProductMutation();
  const [checkedElem, setCheckedElem] = useState<number[]>([]);

  useEffect(() => {
    getProducts({});

    const getProduct = setInterval(() => {
      getProducts({});
    }, 30000);

    return () => clearInterval(getProduct);
  }, []);

  const handleChecked = useCallback(async (id: number, check: boolean) => {
    try {
      await fetchUpdate({ id, checked: !check });
      getProducts({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handlerDeleteAll = async () => {
    const allId = data.map((elem) => elem.id);
    if (!allId.length) return;

    try {
      await fetchDeleteAll(checkedElem);

      getProducts({});
    } catch (e) {
      console.error(e);
    }
  };

  const handlerSelectElem = (elem: IProduct, checked: boolean) => {
    if (checked) {
      setCheckedElem([...checkedElem, elem.id]);
    } else if (!checked) {
      setCheckedElem((product) => product.filter((_, index) => index !== 0));
    }
  };

  return (
    <div className="flex self-center w-[100%] flex-col gap-10">
      <ul>
        <Col className="w-[100%] border-b p-2">
          <span> </span>
          <span>Продукты</span>
          <span>Статус</span>
        </Col>

        {data?.map((elem) => (
          <Product
            key={elem.id}
            elem={elem}
            handleChecked={handleChecked}
            handlerSelectElem={handlerSelectElem}
          />
        ))}
      </ul>

      {!!data.length && (
        <div className="flex justify-center h-[50px]">
          <Button
            handlerButton={handlerDeleteAll}
            name={"Удалить выбранные продукты"}
            disabled={!checkedElem.length}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
