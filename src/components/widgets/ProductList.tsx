import React, { useCallback, useEffect, useState } from "react";
import {
  useDeleteAllMutation,
  useLazyGetProductsQuery,
  useUpdateProductMutation,
} from "../../store/supabase/supabase.api";
import { IProduct } from "../../modules";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ProductEdit } from "./ProductEdit";

const ProductList = () => {
  const [fetchDeleteAll] = useDeleteAllMutation();
  const [getProducts, { data = [] }] = useLazyGetProductsQuery({});
  const [fetchUpdate] = useUpdateProductMutation();
  const [checkedElem, setCheckedElem] = useState<number[]>([]);
  const [activeElem, setActiveElem] = useState<IProduct | null | undefined>();

  const handleClose = useCallback(() => {
    setActiveElem(null);
  }, []);

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

      setCheckedElem([]);
    } catch (e) {
      console.error(e);
    }
  };

  const handlerSelectElem = (elem: IProduct, checked: boolean) => {
    if (checked && !checkedElem.includes(elem.id)) {
      setCheckedElem([...checkedElem, elem.id]);
    } else if (!checked && checkedElem.includes(elem.id)) {
      setCheckedElem((product) => product.filter((el) => el !== elem.id));
    }
  };

  const handlerAllCheckedFalse = () => {
    data.forEach(async (elem) => {
      try {
        await fetchUpdate({ id: elem.id, checked: false });
      } catch (e) {
        console.error(e);
      } finally {
        getProducts({});
      }
    });
  };

  const columns: {
    key: string;
    process: (row: IProduct) => React.ReactNode;
  }[] = [
    {
      key: "product",
      process: (row) => (
        <Flex w="fit-content" alignItems="center" gap="5px">
          <Flex alignItems="center" onClick={(e) => e.stopPropagation()}>
            <Checkbox
              isChecked={checkedElem.includes(row.id)}
              onChange={(e) => {
                handlerSelectElem(row, e.target.checked);
              }}
            />
          </Flex>

          {row?.product}
        </Flex>
      ),
    },
    {
      key: "status",
      process: (row) => (
        <Box
          _hover={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            handleChecked(row.id, row.checked);
          }}
        >
          {row.checked ? "✅" : "❌"}
        </Box>
      ),
    },
  ];

  return (
    <Stack spacing="20px" w="100%" alignItems="center">
      <Flex flexDir="column" w="100%" justifyContent="center">
        <Grid
          templateColumns="1fr auto"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          p="0 16px"
        >
          {columns.map((el) => (
            <Text
              key={el.key}
              textTransform="capitalize"
              fontWeight="500"
              color="cyan.500"
            >
              {el.key}
            </Text>
          ))}
        </Grid>

        <Divider />

        {data?.map((elem, i) => {
          if (i === data.length - 1) {
            return (
              <Grid
                templateColumns="1fr auto"
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                p="0 16px"
                h="40px"
                _hover={{ bg: "rgba(255, 255, 255, 0.05)", cursor: "pointer" }}
                onClick={(e) => {
                  // e.stopPropagation();
                  setActiveElem(elem);
                }}
              >
                {columns.map((el) => el?.process(elem))}
              </Grid>
            );
          }
          return (
            <>
              <Grid
                templateColumns="1fr auto"
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                p="0 16px"
                h="40px"
                _hover={{ bg: "rgba(255, 255, 255, 0.05)", cursor: "pointer" }}
                onClick={(e) => {
                  // e.stopPropagation();
                  setActiveElem(elem);
                }}
              >
                {columns.map((el) => el?.process(elem))}
              </Grid>
              <Divider />
            </>
          );
        })}
      </Flex>

      {!!data.length && (
        <Flex gap="10px">
          <Button
            onClick={handlerDeleteAll}
            disabled={!checkedElem.length}
            colorScheme="blue"
          >
            Remove select product
          </Button>

          <Button
            name={"Убрать статус"}
            onClick={handlerAllCheckedFalse}
            colorScheme="cyan"
          >
            Remove status
          </Button>
        </Flex>
      )}

      <ProductEdit
        elem={activeElem}
        isOpen={!!activeElem}
        handleClose={handleClose}
      />
    </Stack>
  );
};

export default ProductList;
