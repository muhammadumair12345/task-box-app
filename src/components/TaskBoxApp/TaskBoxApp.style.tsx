import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     margin:0;
     box-sizing: border-box;
   }
   body{
       font-size: 1rem;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   }
`;

export const App = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }: TaskBoxAppProps) =>
    backgroundColor === "purple"
      ? "#a02f8a"
      : backgroundColor === "blue"
      ? "#242575"
      : "#24753b"};
`;
