import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
  
    flex-wrap: wrap;
  
    #component-header{
      max-width: 250px;    
    }
    .container-image-header{
      height: 100px;
    }
  
    h1{
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 1px;
      color: rgb(240, 229, 220);
      text-align: right;
      flex: 1;

      @media(max-width:420px){
        text-align: center;         
      }
    }
  
  
    @media(min-width: 420px){
      #component-header{
        margin-left: -40px;
      }
  
      &{
        justify-content: flex-start;
      }
    }

`;


export const Main = styled.main`
   margin-top: 2rem;

  #card-component{
    width: 16rem;
    height: 20rem;
  }

  .preventive-completed{
    margin: 5rem 0 2rem;
    
    > h2{
      font-size: 1.7rem;
      margin-bottom: 2rem;
    }

    .slider{    
      #card-component{
        border: 1px solid rgb(94, 93, 93);
   
      }
    
    
    }
  }

  .preventive-accomplish{
    margin: 5rem 0 2rem;
  
    > h2{
      font-size: 1.7rem;
  
      @media(max-width: 900px){
        text-align: center;
      }
    }
  
    .wrapper-cards-preventive-accomplish{      
      display: grid;
      align-items: center;
      justify-items: center;
      row-gap: 2rem;
      margin-top: 2rem;

      @media(min-width: 600px){
          grid-template-columns: repeat(2, 1fr);
      } 

  
      @media(min-width: 900px){
        grid-template-columns: repeat(3, 1fr);
        justify-items: start;      
      }
    }
  
  }
`;

  
  
  
  