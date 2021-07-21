import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    padding: 0 2rem;
    margin: 0 auto;
`;


export const Main = styled.main`     
    button{
        margin-top: 2rem;
        width: 180px;
        height: 2.6rem;
        font-size: 1rem;
    }

    .input-block-component:last-of-type{
        label{
            text-transform: uppercase;
        }
    }


`;


export const Section = styled.section`
    margin: 3rem 0;

    .wrapper-preventives-completed-admin{
            margin-top: 2rem;

            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            align-items: center;

            @media(min-width: 720px){
                grid-template-columns: repeat(3,1fr);
                justify-items: start;
            }
    }

    .wrapper-preventives-completed-admin{
    button{
        & + button{
            margin-top: 1rem;
        }
    }
}

    &{
        @media(max-width: 720px){
            h1{
                text-align: center;
            }
        }
    }
`;



        


