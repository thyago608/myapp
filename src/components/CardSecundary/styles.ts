import styled from 'styled-components';

export const Wrapper = styled.button`

border: 0;
    width: 14rem;
    min-height: 230px;
    background: var(--brown-500);
    position: relative;
  
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.3rem;
    transition: filter 0.2s ease;
  
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
  
    cursor: pointer;

    &::after{
        content: "";
        width: 100%;
        height: 4px;
      
        background: var(--orange-400);
        position: absolute;
        left:0;
        bottom: 0;
      }
      
      
    &:hover{
        filter:brightness(0.7);
    }
    

    span{
      display: block;
      text-align: center;
      word-wrap: break-word;
      color: var(--gray-100);
    }

    .date{      
      margin-top: 1rem;
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      font-size: 0.8rem;
      font-weight: 400;

      strong{
        color: white;
        font-weight: 600;
        margin-right: 5px;
      }
    }
  
  

  
  .card-secundary{
    .container-image-card-secundary{
      > img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      display: flex;
      justify-content: center;
    }

    .title{
      font-weight: 700;
      font-size: 1rem;
    }

    .subtitle{
      font-size: 0.8rem;
      margin: 0.5rem 0;
    }

  }

`;