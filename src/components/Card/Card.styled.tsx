import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;

  padding: 5px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`;

export const Decor = styled.span`
  text-transform: lowercase;
  margin-bottom: 2px;
  font-size: 12px;
  font-weight: 600;
`;

export const Content = styled.span`
  font-size: 12px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  max-width: 150px;
  margin: auto;
  margin-bottom: 10px;
  padding: 2px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

export const ShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Button = styled.button`
  width: 80px;
  color: white;
  margin: auto;
  padding: 5px;
  background-color: #333536;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const IconWrapper = styled.div`
  &:hover,
  &:focus {
    cursor: pointer;
    color: orange;
  }
`;
