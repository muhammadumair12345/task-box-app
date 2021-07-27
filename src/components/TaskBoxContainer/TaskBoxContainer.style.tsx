import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }: TaskBoxContainerProps) => width};
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${({ borderWidth }: TaskBoxContainerProps) => borderWidth} dotted
    #9e6f39;
`;
