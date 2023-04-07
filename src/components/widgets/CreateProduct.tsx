import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import {
  useLazyGetProductsWithFilterQuery,
  useSetProductMutation,
} from "../../store/supabase/supabase.api";

const CreateProduct = () => {
  const [getProducts] = useLazyGetProductsWithFilterQuery();
  const [value, setValue] = useState("");
  const [fetch] = useSetProductMutation();

  const handler = async () => {
    try {
      await fetch({ product: value.toLocaleLowerCase(), checked: false });
      getProducts({});
    } catch (e) {
      console.error(e);
    } finally {
      setValue("");
    }
  };
  return (
    <div className="flex justify-center">
      <form
        className="flex gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          handler();
        }}
      >
        <Input value={value} handleChange={setValue} />

        <Button type="submit" disabled={!value} name="Send" size="m" />
      </form>
    </div>
  );
};

export default CreateProduct;
