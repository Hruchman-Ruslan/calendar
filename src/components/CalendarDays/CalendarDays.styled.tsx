import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
`;

export const Item = styled.li`
  background-color: #f1eded;
  padding: 8px;
`;

export const Text = styled.p`
  color: #84888b;
  font-size: 18px;
  margin-bottom: 5px;
`;
