import React, { MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { Content, Wrapper } from "./Modal.styled";
import { Form } from "..";

const modalRoot = document.getElementById("modal-root") as Element;

interface ModalProps {
  toggle: () => void;
}

export const Modal: React.FC<ModalProps> = ({ toggle }) => {
  useEffect(() => {
    const handleCloseEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggle();
      }
    };
    document.addEventListener("keydown", handleCloseEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseEsc);
    };
  }, [toggle]);

  const handleCloseOverlay = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return createPortal(
    <Wrapper onClick={handleCloseOverlay}>
      <Content>
        <Form toggle={toggle} />
      </Content>
    </Wrapper>,
    modalRoot
  );
};
