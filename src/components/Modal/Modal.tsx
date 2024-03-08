import React, { MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { Content, Wrapper } from "./Modal.styled";

interface ModalProps {
  toggle: () => void;
}

const modalRoot = document.getElementById("modal-root") as Element;

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
        <div>
          <h2>Your task</h2>
        </div>
      </Content>
    </Wrapper>,
    modalRoot
  );
};
