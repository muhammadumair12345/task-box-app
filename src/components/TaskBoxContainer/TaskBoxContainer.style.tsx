import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }: TaskBoxContainerProps) => width};
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ background }: TaskBoxContainerProps) =>
    background === "purple"
      ? "linear-gradient(#f00, #dc181891)"
      : background === "blue"
      ? "linear-gradient(#d8a61b, #dcc81891)"
      : "linear-gradient(#002fff, #185ddca7)"};
`;
