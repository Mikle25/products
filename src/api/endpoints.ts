import { supabase } from "./index";

export type TProduct = {
  id: number;
  product: string;
  checked: boolean;
};

const TABLE = {
  products: "products",
};

export const getProductList = async () => {
  const { data, error } = await supabase
    .from(TABLE.products)
    .select()
    .order("id", { ascending: true });
  return { data, error };
};

export const setProduct = async (arg: Partial<TProduct>) => {
  const resp = await supabase.from(TABLE.products).insert([arg]);

  return { ...resp };
};

export const updateStatusProduct = async (arg: Partial<TProduct>) => {
  const resp = await supabase.from(TABLE.products).upsert([arg]);

  return { ...resp };
};

export const deleteProduct = async (arg: Partial<TProduct>) => {
  const resp = await supabase.from(TABLE.products).delete().eq("id", arg.id);

  return { ...resp };
};

export const deleteAll = async (arg: number[]) => {
  const resp = await supabase.from(TABLE.products).delete().in("id", arg);

  return { ...resp };
};
