import styled from 'styled-components';


export const Main = styled.main`
    max-width: 720px;
    border-radius: 0.8rem;
    margin: 2rem auto 2rem;
   
    background: var(--brown-500);
    padding:2rem;

`;

export const Box = styled.div`
   display: flex;
   align-items: center;

   .container-image-preventive-selected{
    margin-right: 3rem;
    filter: brightness(0.9);
  
    > img{
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
  
    @media(max-width:350px){
      flex: 1;
      text-align: center;
      margin: 0;
    }
  
  }

  .container-info-preventive-selected{
    display: flex;
    flex-direction: column;
  
    h1{
      font-weight: 600;
      font-size: 1.9rem;
      color: var(--gray-100);
    }
    span{
      display: block;
      margin-top: 0.7rem;
      font-weight: 300;
      font-size: 0.9rem;
      letter-spacing: 1px;
      color: rgb(204, 201, 201);
    }
    a{
      display: block;
      margin-top: 1.5rem;
      font-weight: 600;
      color: var(--gray-100);
      letter-spacing: 1px;
      transition: filter 0.2s ease;
  
      &:hover{
        filter: brightness(0.9);
      }
    }
  
    @media(max-width: 350px){
      align-items: center;
  
      > h1{
        text-align: center;
      }
      
    }
  }

  .form-preventive-selected{
    margin-top: 4rem;
    display: flex;
    flex-direction: column;

    label{
      margin: 1rem 0;
    }

    input[type="date"], 
    input[type="time"]{
      border: 0;
      border-radius: 0.5rem;
      color: var(--gray-100);
      letter-spacing: 1px;
      outline: transparent;
      background: #686262;
      padding: 0.5rem;

      @media(min-width: 550px){
          width: 90%;
      }

      @media(min-width: 620px){
        width: 80%;
     }

      @media(min-width: 700px){
      width: 70%;
      }
      
      @media(min-width: 700px){
        width: 50%;
      }
    }
    
    button{
      width: 10rem;
      height: 2.8rem;
      margin-top: 1rem;
    }
    
  }
  

  
  @media(max-width: 350px){
    flex-wrap: wrap;  
  
    .container-image-preventive-selected{
        margin-bottom: 2rem;
    }  
  }
`;


  
 
  

  
  
  