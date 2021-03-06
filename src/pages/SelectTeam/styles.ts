import styled from 'styled-components';

export const Main = styled.main`
display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    
  
     #card-component{
        width: 15rem;
        height: 15rem;
        padding: 0 2rem;
    }
  
    @media(max-width: 800px){
      row-gap: 2rem;
      & #card-component:first-child{
        margin-top: 2rem;
      } 
      & #card-component:last-child {
        margin-bottom: 2rem;
      }
    }
  
    @media(min-width: 800px){
      &{
        grid-template-columns: repeat(2, 1fr);
        height: calc(100vh - 150px);
        row-gap: 1rem;
      }
    }

`;