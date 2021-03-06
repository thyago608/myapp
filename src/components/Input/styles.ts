import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    
    display:flex;
    justify-content: space-between;
    align-items: flex-end;

    & + &{
        margin-top: 0.8rem;
    }

    label, input{
        display:block;
        
    }

    label{
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--gray-100);
        text-transform: capitalize;
        margin-right: 2rem;
        flex: 1;
        text-align: right;
    }

    input{
        flex: 8;
        height: 2rem;
        background: transparent;
        border: 0;
        border-bottom: 2px solid #636e72;
        outline: transparent;
        color: white;
        transition: padding 0.3s ease;

        &:focus{
            border-color: var(--orange-400);
            padding-top: 0.7rem;
            background: none;
        }

        /* Cor de fundo do autocomplete */
        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px var(--brown-600) inset;
        }

        /* Cor do texto do autocomplete */
        &:-webkit-autofill {
            -webkit-text-fill-color: white !important;
        }
    }
`;