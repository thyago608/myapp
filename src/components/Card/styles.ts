import styled from 'styled-components';

export const Wrapper = styled.button`
    
  padding: 0 1rem;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
  background: var(--brown-500);
  border: 0;
  overflow: hidden;
  border-radius: 0.3rem;
  position: relative;
  cursor: pointer;

  transition: filter 0.3s ease;

  .card{      
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

    .container-image-card{              
      > img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }  
    }

    span{
      display: block;
      text-align: center;
      font-size: 1.3rem;
      font-weight: 600;
      word-wrap: break-word;
      color: var(--gray-100);
      line-height: 1.8rem;
      
      &.subtitle{
        font-size: 0.8rem;
        font-weight: 400;
      }

        &.term{
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 2px;      
        }
      }
    }
  
  &::after{
    content: "";
    width: 105%;
    height: 4px;
  
    background: var(--orange-400);
    position: absolute;
    left: -5px;
    bottom: 0;
  }
  
  
  &:hover{
    filter:brightness(0.7);
  }
`;
