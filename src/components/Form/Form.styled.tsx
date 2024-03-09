import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const TaskInput = styled.textarea`
  width: 250px;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  margin: auto;
  margin-bottom: 20px;
  resize: none;
`;

export const SaveButton = styled.button`
  width: 100px;
  color: white;
  margin: auto;
  padding: 10px;
  background-color: black;
  border: none;
  cursor: pointer;

  margin-bottom: 20px;
`;
