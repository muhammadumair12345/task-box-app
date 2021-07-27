import styled from "styled-components";

export const Input = styled.input`
  padding: 0.6rem;
  width: ${({ width }: TaskBoxInputProps) => width};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  border: 1px solid #413f3f;
  background-color: #ece0e0;
  border-radius: 0.25rem;
`;
