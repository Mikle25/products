import React, { FC, memo, useState } from "react";
import Input from "../ui/Input";
import { IProduct } from "../../modules";
import Button from "../ui/Button";
import {
  useEditProductMutation,
  useLazyGetProductsQuery,
} from "../../store/supabase/supabase.api";

interface ProductEditProps {
  elem: IProduct;
  handleClose: () => void;
}

export const ProductEdit: FC<ProductEditProps> = memo(
  ({ elem, handleClose }) => {
    const [value, setValue] = useState(elem.product);
    const [fetchEditProduct] = useEditProductMutation();

    const [getProducts] = useLazyGetProductsQuery({});

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
        // setValue("");
      }
    };

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
          <Button type="submit" name="Edit" size="m" disabled={!value} />
          <Button name="Close" handlerButton={handleClose} size="m" />
        </div>
      </form>
    );
  }
);
