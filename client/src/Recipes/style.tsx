import styled from 'styled-components';

export const Block = styled.div`
    margin: 4rem 0;
    padding: 0 3rem;

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        padding: 0;
    }
`;
