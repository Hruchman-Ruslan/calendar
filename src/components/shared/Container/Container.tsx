import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 80px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;
