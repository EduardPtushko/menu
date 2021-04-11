import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    column-gap: 1rem;
    margin: 0 auto 3rem auto;
    width: 400px;

    @media (min-width: 768px) {
        max-width: 680px;
        width: 100%;
        grid-template-columns: 220px auto;
        grid-template-rows: auto 1fr;
    }
`;

export const Image = styled.div`
    > img {
        width: 100%;
        height: 180px;
        border-radius: var(--radius);
        object-fit: cover;
        border: 5px solid var(--clr-gold);
    }

    @media (min-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dotted var(--clr-black);
    padding: 0.5rem 0 0.25rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        padding-top: 0;
    }

    > h3 {
        text-transform: capitalize;
        font-weight: 500;
        letter-spacing: calc(var(--spacing) / 2);
    }

    > h4 {
        color: var(--clr-gold);
    }
`;

export const Description = styled.p`
    color: var(--clr-grey-5);
    text-align: justify;

    @media (min-width: 768px) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        text-align: left;
    }
`;
