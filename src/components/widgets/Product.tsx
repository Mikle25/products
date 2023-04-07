import React, { FC, useState } from "react";
import { Col } from "../styles/Col";
import { Modal } from "../ui/Modal";
import { IProduct } from "../../modules";
import { ProductEdit } from "./ProductEdit";

interface ProductProps {
  elem: IProduct;
  handleChecked: (id: number, isChecked: boolean) => void;
}

export const Product: FC<ProductProps> = ({ elem, handleChecked }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Col
      key={elem.id}
      className={`w-[100%] border-b p-2 ${
        elem.checked ? "bg-green-300 text-black" : undefined
      }`}
    >
      <span
        className="uppercase"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {elem.product}
      </span>

      <Modal
        isOpen={isOpen}
        header="Edit product"
        content={
          <ProductEdit elem={elem} handleClose={() => setIsOpen(false)} />
        }
      />

      <span
        className={`${
          elem.checked ? "text-green-00" : "text-red-600"
        } cursor-pointer`}
        onClick={() => handleChecked(elem.id, elem.checked)}
      >
        {elem.checked ? "V" : "X"}
      </span>
      {/*<span onClick={() => handleDelete(elem)} className="cursor-pointer">*/}
      {/*  x*/}
      {/*</span>*/}
    </Col>
  );
};
