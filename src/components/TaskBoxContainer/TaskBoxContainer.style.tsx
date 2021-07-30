import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }: TaskBoxContainerProps) => width + `px`};
  height: 65vh;
  display: flex;
  padding: 1.2rem;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  background: ${({ background }: TaskBoxContainerProps) => background};
`;
