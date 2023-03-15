import React, { useEffect } from "react";
import { formatDate } from "../utils/helpers";
import {
  useDeleteAllMutation,
  useLazyGetProductsQuery,
} from "../store/supabase/supabase.api";
import Button from "../components/ui/Button";
import { IProduct } from "../modules";

const Statistics = () => {
  const [getProducts, { data = [] }] = useLazyGetProductsQuery({});
  const [fetchDeleteAll] = useDeleteAllMutation();

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
      Statistics Page
      <ul>
        <div className="w-[100%] grid grid-cols-2 border-b mb-2 p-2">
          <span>Product</span>
          <span>Status</span>
        </div>

        {Object.entries(formatData).map((elem) => (
          <div>
            <div className="underline">{elem[0]}</div>
            {elem[1].map((e) => (
              <div
                key={e.id}
                className={`w-[100%] grid grid-cols-2  border-b p-2 ${
                  e.checked ? "bg-green-300" : undefined
                }`}
              >
                <span className="uppercase">{e.product}</span>

                <span
                  className={`${e.checked ? "text-green-500" : "text-red-600"}`}
                >
                  {e.checked ? "V" : "X"}
                </span>
              </div>
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
