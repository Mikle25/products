import React, { memo, useState } from "react";

import {
  useLazyGetProductsQuery,
  useSetProductMutation,
} from "../../store/supabase/supabase.api";
import { Button, Flex, Input } from "@chakra-ui/react";

const CreateProduct = () => {
  const [getProducts] = useLazyGetProductsQuery();
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
    <Flex
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        handler();
      }}
      gap="10px"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        minW="300px"
      />

      <Button
        variant="solid"
        type="submit"
        disabled={!value}
        colorScheme="teal"
      >
        Add
      </Button>
    </Flex>
  );
};

export default memo(CreateProduct);
