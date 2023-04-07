import React, { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  handleClose?: () => void;
  header: string;
  content: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  handleClose,
  header,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="w-[100vw] h-[100vh] modal flex justify-center items-center fixed top-0 left-0"
      onClick={() => (handleClose ? handleClose() : null)}
    >
      <div
        className="modal_box min-h-[200px] w-[400px] min-w-[350px] p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="uppercase self-center">{header}</div>
        {content}
      </div>
    </div>
  );
};
