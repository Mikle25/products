import React, { FC, memo, useState } from "react";
import { Col } from "../styles/Col";
import { Modal } from "../ui/Modal";
import { IProduct } from "../../modules";
import { ProductEdit } from "./ProductEdit";

interface ProductProps {
  elem: IProduct;
  handleChecked: (id: number, isChecked: boolean) => void;
  handlerSelectElem: (elem: any, checked: boolean) => void;
}

export const Product: FC<ProductProps> = ({
  elem,
  handleChecked,
  handlerSelectElem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Col
      key={elem.id}
      className={`cursor-pointer w-[100%] border-b p-2 ${
        elem.checked ? "bg-green-200" : "hover:bg-gray-50/10"
      }`}
    >
      <input
        type="checkbox"
        className="w-[20px] h-[20px]"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          handlerSelectElem(elem, e.target.checked);
        }}
      />
      <span
        className={`uppercase ${elem.checked ? "text-black" : undefined}`}
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
        className={`cursor-pointer`}
        onClick={() => handleChecked(elem.id, elem.checked)}
      >
        {elem.checked ? "✅" : "❌"}
      </span>
    </Col>
  );
};
