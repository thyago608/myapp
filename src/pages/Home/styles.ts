import styled from 'styled-components';

export const Main = styled.main`
height: calc(100vh - 150px);
  
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  @media(min-width: 750px){
    grid-template-columns: repeat(2, 1fr);
  }

  #card-component{
    width: 16rem;
    height: 16rem;
    padding: 0 2rem;
  }
 `;
