import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const ListIcon = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ItemIcon = styled.li`
  &:hover,
  &:focus {
    cursor: pointer;
    color: orange;
  }
`;

export const Item = styled.li``;

export const Title = styled.h1`
  font-size: 28px;
  color: #9ca2a7;
`;

export const Input = styled.input`
  width: 40px;
  padding: 3px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
`;

export const InputSearch = styled.input`
  width: 100px;
  padding: 3px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
`;
