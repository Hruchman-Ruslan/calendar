import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;

  text-align: end;

  margin-bottom: 20px;
`;

export const SelectMenu = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const DropdownDefault = styled.div`
  margin-right: 20px;
`;

export const DropdownText = styled.p`
  cursor: pointer;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 25px;
  right: -20px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const DropdownColor = styled.span`
  width: 35px;
  height: 8px;
  margin-right: 8px;
  border-radius: 5px;
`;
