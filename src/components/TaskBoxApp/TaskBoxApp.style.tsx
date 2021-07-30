import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     margin:0;
     padding:0;
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
  padding: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ backgroundColor }: TaskBoxAppProps) =>
    backgroundColor};
`;
