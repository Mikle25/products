import React, { useEffect } from "react";
import { formatDate } from "../utils/helpers";
import {
  useDeleteAllMutation,
  useDeleteProductMutation,
  useLazyGetProductsQuery,
} from "../store/supabase/supabase.api";
import Button from "../components/ui/Button";
import { IProduct } from "../modules";
import styled from "styled-components";

const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 75px 10px;
`;

const Statistics = () => {
  const [getProducts, { data = [] }] = useLazyGetProductsQuery({});
  const [fetchDeleteAll] = useDeleteAllMutation();
  const [fetchDelete] = useDeleteProductMutation();

  const formatData = data.reduce((acc, elem) => {
    const f = formatDate(new Date(elem?.date));

    if (formatDate(new Date(elem.date)) in acc) {
      acc[f].push(elem);
    } else {
      acc[f] = [elem];
    }
    return acc;
  }, {} as Record<string, IProduct[]>);

  useEffect(() => {
    getProducts("");
  }, []);

  const handleDelete = async (elem: any) => {
    try {
      await fetchDelete(elem);
      getProducts({});
    } catch (e) {
      console.error(e);
    }
  };

  const handlerDeleteAll = async () => {
    const allId = data.map((elem) => elem.id);
    if (!allId.length) return;

    try {
      await fetchDeleteAll(allId);

      getProducts({});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <ul>
        <Col className="w-[100%] border-b mb-2 p-2">
          <span>Product</span>
          <span>Status</span>
          <span></span>
        </Col>

        {Object.entries(formatData).map((elem, i) => (
          <div key={i}>
            <div className="underline text-cyan-400">{elem[0]}</div>
            {elem[1].map((e) => (
              <Col
                key={e.id}
                className={`w-[100%]  border-b p-2 ${
                  e.checked ? "bg-green-300 text-black" : undefined
                }`}
              >
                <span className="uppercase">{e.product}</span>

                <span
                  className={`${e.checked ? "text-green-800" : "text-red-600"}`}
                >
                  {e.checked ? "V" : "X"}
                </span>

                <span
                  onClick={() => handleDelete(e)}
                  className="cursor-pointer"
                >
                  x
                </span>
              </Col>
            ))}
          </div>
        ))}
      </ul>
      {!!data.length && (
        <div className="flex justify-center h-[50px]">
          <Button
            value={data?.length}
            handlerButton={handlerDeleteAll}
            name={"Delete all"}
            size="m"
          />
        </div>
      )}
    </div>
  );
};

export default Statistics;
