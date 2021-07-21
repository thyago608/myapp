import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: #ffffff;
    
    --brown-500: #352B2A;
    --brown-600: #3d3532;
    --orange-400: #aa371e;
    --orange-800: #c7621a;
    --gray-100: #dfe4ea;
    --gray-600:#2D2B29;
  }
  
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
  
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  
  body {
    background: var(--brown-600);
    color: var(--white);
    font: 400 'Roboto', sans-serif;
  }
  
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Archivo", sans-serif;
  }
  body{
    min-height: 100vh;
  
  }
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img{
    width:100%;
    height: 100%;
    object-fit: contain;
  }
  
  main{
    margin: 0 auto;
    max-width: 1080px;
  }
  
  #page{
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;