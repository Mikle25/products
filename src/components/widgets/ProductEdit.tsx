import React, { FC, memo, useState } from "react";
import { IProduct } from "../../modules";
import {
  useEditProductMutation,
  useLazyGetProductsQuery,
} from "../../store/supabase/supabase.api";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ProductEditProps {
  elem: IProduct | null | undefined;
  isOpen: boolean;
  handleClose: () => void;
}

export const ProductEdit: FC<ProductEditProps> = memo(
  ({ elem, isOpen, handleClose }) => {
    const [value, setValue] = useState<string>();
    const [fetchEditProduct] = useEditProductMutation();

    const [getProducts] = useLazyGetProductsQuery({});

    const handleEdit = async () => {
      try {
        await fetchEditProduct({
          product: value?.toLocaleLowerCase(),
          id: elem?.id,
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
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              as="form"
              flexDir="column"
              alignItems="center"
              gap="10px"
              onSubmit={(e) => {
                e.preventDefault();
                handleEdit();
              }}
            >
              <Input
                defaultValue={elem?.product}
                value={value}
                onChange={(e) => {
                  setValue(e.currentTarget.value);
                }}
              />

              <Flex alignItems="center" gap="10px">
                <Button type="submit" disabled={!value} colorScheme="green">
                  Edit
                </Button>
                <Button onClick={handleClose} colorScheme="gray">
                  Close
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);
