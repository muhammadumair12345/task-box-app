import styled from "styled-components";

export const Button = styled.button`
  margin-top: 2rem;
  border: none;
  padding: 0.9rem;
  color: #fff;
  width: 10vw;
  background: ${({ varient }: TaskBoxButtonProps) =>
    varient === "danger"
      ? "linear-gradient(#f00, #dc181891)"
      : varient === "primary"
      ? "linear-gradient(#d8a61b, #dcc81891)"
      : "linear-gradient(#002fff, #185ddca7)"};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  :active {
    border: 1px solid
      ${({ varient }: TaskBoxButtonProps) =>
        varient === "danger"
          ? "#f00"
          : varient === "primary"
          ? "#d8a61b"
          : "#002fff"};
    border-radius: 2px;
  }
`;
