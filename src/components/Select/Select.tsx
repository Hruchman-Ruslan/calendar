import React, { useState } from "react";
import {
  Wrapper,
  Dropdown,
  DropdownColor,
  DropdownDefault,
  DropdownItem,
  DropdownText,
  SelectMenu,
} from "./Select.styled";
import { getColor } from "../../utils/getColor";

export type Color = "blue" | "green" | "red" | "purple";
export type Value = "Normal" | "Easy" | "Hard" | "Postpone";

const options: { label: Value; color: Color }[] = [
  { label: "Easy", color: "blue" },
  { label: "Normal", color: "green" },
  { label: "Hard", color: "red" },
  { label: "Postpone", color: "purple" },
];

export const Select: React.FC<{
  setSelected: (value: Value) => void;
  selected: Value;
}> = ({ setSelected, selected }) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleDropdown = () => setActive((prevState) => !prevState);

  const onClick = (difficulty: Value) => {
    setSelected(difficulty);
    setActive(false);
  };

  return (
    <Wrapper>
      <SelectMenu onClick={toggleDropdown}>
        <DropdownColor style={{ backgroundColor: getColor(selected) }} />
        <DropdownDefault>{selected}</DropdownDefault>
      </SelectMenu>
      {active && (
        <Dropdown>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => onClick(option.label)}>
              <DropdownColor
                style={{ backgroundColor: getColor(option.label) }}
              />
              <DropdownText>{option.label}</DropdownText>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};
