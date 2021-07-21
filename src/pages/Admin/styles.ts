import styled from 'styled-components';


export const Main = styled.main`
 max-width: 720px;
    margin-top: 10rem;
  
    form{
      display: flex;
      flex-direction: column;
      align-items: center;
  
      input{
        max-width: 300px;
        height: 2.5rem;
        border: 0;
        border-radius: 0.2rem;
        background: #5a504d;
        padding: 0 1.2rem;
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--gray-100);
        outline: transparent;
  
        &::placeholder{
          color: white;
          font-weight: 400;
        }
  
        &::-webkit-inner-spin-button{
          opacity: 0;
        }
        
      }
  
      button{
        flex: none;
        width: 160px;
        margin-top: 2rem;
      }
  
    }
`;