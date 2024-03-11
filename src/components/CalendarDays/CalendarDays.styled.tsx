import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 150px);
  gap: 10px;
`;

export const Item = styled.li`
  border: 1px solid brown;
`;

export const Text = styled.p`
  padding: 10px;
`;
