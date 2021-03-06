import styled from 'styled-components';

export const ButtonComponent = styled.button`
  border: 0;
  background: var(--orange-800);
  border-radius: 0.3rem;
  color: var(--gray-100);
  height: 3rem;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  
  cursor: pointer;
  transition: filter 0.2s ease;
  
  &:hover{
    filter: brightness(0.8);
  }
`;