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

type Color = "blue" | "green" | "red" | "purple";
type Value = "Normal" | "Easy" | "Hard" | "Postpone";

const options: { label: Value; color: Color }[] = [
  { label: "Easy", color: "blue" },
  { label: "Normal", color: "green" },
  { label: "Hard", color: "red" },
  { label: "Postpone", color: "purple" },
];

export const Select: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Value>("Normal");
  const [selectedColor, setSelectedColor] = useState<Color>("green");

  const toggleDropdown = () => setActive((prevState) => !prevState);

  const onClick = (difficulty: Value, color: Color) => {
    setSelected(difficulty);
    setSelectedColor(color);
    setActive(false);
  };

  return (
    <Wrapper>
      <SelectMenu onClick={toggleDropdown}>
        <DropdownColor style={{ backgroundColor: selectedColor }} />
        <DropdownDefault>{selected}</DropdownDefault>
      </SelectMenu>
      {active && (
        <Dropdown>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => onClick(option.label, option.color)}
            >
              <DropdownColor style={{ backgroundColor: option.color }} />
              <DropdownText>{option.label}</DropdownText>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};
