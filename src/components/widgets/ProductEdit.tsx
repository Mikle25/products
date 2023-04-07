import React, { FC, useState } from "react";
import Input from "../ui/Input";
import { IProduct } from "../../modules";
import Button from "../ui/Button";
import {
  // useDeleteProductMutation,
  useEditProductMutation,
  useLazyGetProductsWithFilterQuery,
} from "../../store/supabase/supabase.api";

interface ProductEditProps {
  elem: IProduct;
  handleClose: () => void;
}

export const ProductEdit: FC<ProductEditProps> = ({ elem, handleClose }) => {
  const [value, setValue] = useState("");
  const [fetchEditProduct] = useEditProductMutation();
  // const [fetchDelete] = useDeleteProductMutation();

  const [getProducts] = useLazyGetProductsWithFilterQuery({});

  const handleEdit = async () => {
    try {
      await fetchEditProduct({
        product: value.toLocaleLowerCase(),
        id: elem.id,
      });
      getProducts({});
      handleClose();
    } catch (e) {
      console.error(e);
    } finally {
      setValue("");
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit();
      }}
      className="flex flex-col gap-10 mt-5"
    >
      <Input
        value={value}
        handleChange={(e) => {
          setValue(e);
        }}
      />

      <div className="flex justify-center gap-10 h-[40px]">
        <Button type="submit" name="Edit" disabled={!value} />
        <Button name="Close" handlerButton={handleClose} />
      </div>
    </form>
  );
};
