import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const TaskInput = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 16px;
  margin: auto;
  margin-bottom: 20px;
  resize: none;
  font-weight: 600;

  border: 2px solid #333536;
`;

export const SaveButton = styled.button`
  width: 100px;
  color: white;
  margin: auto;
  padding: 5px;
  background-color: #333536;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
