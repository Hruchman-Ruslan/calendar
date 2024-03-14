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

export type Color = "blue" | "green" | "red" | "purple" | "orange";
export type Value = "Meeting" | "Work" | "Study" | "Exercise" | "Other";

const options: { label: Value; color: Color }[] = [
  { label: "Meeting", color: "blue" },
  { label: "Work", color: "green" },
  { label: "Study", color: "red" },
  { label: "Exercise", color: "purple" },
  { label: "Other", color: "orange" },
];

export const Select: React.FC<{
  setSelected: (value: Value | null) => void;
  selected: Value | null;
}> = ({ setSelected, selected }) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleDropdown = () => setActive((prevState) => !prevState);

  const onClick = (difficulty: Value) => {
    setSelected(difficulty);
    setActive(false);
  };

  const handleReset = () => {
    setSelected(null);
    setActive(false);
  };

  return (
    <Wrapper>
      <SelectMenu onClick={toggleDropdown}>
        <DropdownColor
          style={{ backgroundColor: getColor(selected || "Meeting") }}
        />
        <DropdownDefault>{selected || "Meeting"}</DropdownDefault>
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
          <DropdownItem onClick={handleReset}>Reset</DropdownItem>
        </Dropdown>
      )}
    </Wrapper>
  );
};
