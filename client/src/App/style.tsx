import styled from 'styled-components';

export const Container = styled.section`
    max-width: var(--max-width);
    margin: 3rem auto 0;
`;

export const Header = styled.div`
    padding: 2rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`;

export const Heading = styled.h2`
    font-size: 2rem;
    margin-bottom: 0.3rem;
    letter-spacing: var(--spacing);
`;
export const Underline = styled.div`
    width: 80px;
    height: 4px;
    background-color: var(--clr-gold);
`;
