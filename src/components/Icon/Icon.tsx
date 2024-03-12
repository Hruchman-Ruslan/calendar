import { FC } from "react";

import sprite from "/sprite.svg";
import { Svg } from "./Icon.styled";

interface IconProps {
  idIcon: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick: () => void;
}

export const Icon: FC<IconProps> = ({
  idIcon,
  width,
  height,
  fill = "#333536",
  onClick,
}) => {
  return (
    <Svg width={width} height={height} fill={fill}>
      <use onClick={onClick} xlinkHref={`${sprite}#icon-${idIcon}`}></use>
    </Svg>
  );
};
