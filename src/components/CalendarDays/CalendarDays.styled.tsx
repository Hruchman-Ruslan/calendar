import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, minmax(150px, 1fr));
  gap: 10px;
`;

export const Item = styled.li<{ today?: boolean }>`
  background-color: ${(props) => (props.today ? "#db6b26" : "#f1eded")};
  padding: 8px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.today ? "#db6b26" : "#e1e1e1")};
  }
`;

export const Text = styled.p`
  color: #84888b;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
