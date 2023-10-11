import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  deleteAll,
  deleteProduct,
  editProduct,
  setProduct,
  TProduct,
  updateStatusProduct,
} from "../../api/endpoints";
import { IProduct } from "../../modules";
import { supabase } from "../../api";
import { formatDate } from "../../utils/helpers";

const TABLE = {
  products: "products",
};

export const supabaseApi = createApi({
  reducerPath: "supabase/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], unknown>({
      queryFn: async (): Promise<any> => {
        const resp = await supabase
          .from(TABLE.products)
          .select()
          .order("checked", { ascending: true })
          .order("date", { ascending: false });

        return { ...resp };
      },
    }),
    getProductsWithFilter: build.query<IProduct[], unknown>({
      queryFn: async (): Promise<any> => {
        const date = new Date();

        const resp = await supabase
          .from(TABLE.products)
          .select()
          .order("id", { ascending: true })
          .filter("date", "gte", formatDate(date));

        return { ...resp };
      },
    }),
    setProduct: build.mutation<unknown, Partial<TProduct>>({
      queryFn: async (arg): Promise<any> => {
        const resp = await setProduct(arg);

        return { ...resp };
      },
    }),
    updateProduct: build.mutation<unknown, Partial<TProduct>>({
      queryFn: async (arg): Promise<any> => {
        const resp = await updateStatusProduct(arg);

        return { ...resp };
      },
    }),
    deleteProduct: build.mutation<unknown, Partial<TProduct>>({
      queryFn: async (arg): Promise<any> => {
        const resp = await deleteProduct(arg);

        return { ...resp };
      },
    }),
    deleteAll: build.mutation<any, number[]>({
      queryFn: async (arg): Promise<any> => {
        const resp = await deleteAll(arg);

        return { ...resp };
      },
    }),
    editProduct: build.mutation({
      queryFn: async (arg): Promise<any> => {
        const resp = await editProduct(arg);

        return { ...resp };
      },
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useSetProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useDeleteAllMutation,
  useLazyGetProductsWithFilterQuery,
  useEditProductMutation,
} = supabaseApi;
